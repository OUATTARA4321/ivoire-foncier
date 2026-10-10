import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    // Récupérer les statistiques
    const { count: propertiesCount } = await supabase
      .from('properties')
      .select('*', { count: 'exact', head: true });

    const { count: contactsCount } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });

    const { count: approvedCount } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'approved');

    // Récupérer les demandes récentes
    const { data: recentContacts } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    return Response.json({
      stats: {
        properties: propertiesCount || 0,
        contacts: contactsCount || 0,
        approved: approvedCount || 0,
      },
      recent: recentContacts || [],
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return Response.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
