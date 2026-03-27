// FILE NAME: certhilsupabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://koegynrtboafzpxtmglw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZWd5bnJ0Ym9hZnpweHRtZ2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNzM0MjQsImV4cCI6MjA4OTg0OTQyNH0.OnBujMbRBQ2-kJIY3qQsbW4Q-B_1mkeFJp30up_gnDY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ✅ Realtime sync
// Ajustado o nome da tabela para 'anotacoes'
supabase.channel('realtime-anotacoes') // Corrigido para 'realtime-anotacoes'
  .on('postgres_changes', { event: '*', schema: 'public', table: 'anotacoes' }, payload => { // Corrigido para 'anotacoes'
    console.log('Alteração detectada:', payload)
    // Se você tiver um mecanismo de recarregamento no seu script principal,
    // ele será acionado por esta detecção.
  })
  .subscribe()
