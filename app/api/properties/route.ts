import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return Response.json(data || []);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return Response.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}
