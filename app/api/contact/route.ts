import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase.from('contacts').insert({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      status: 'pending',
    });

    if (error) throw error;

    return Response.json(
      {
        success: true,
        message: 'Votre demande a été envoyée avec succès. Nous vous recontacterons très bientôt.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact:', error);
    return Response.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
