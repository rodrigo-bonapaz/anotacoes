// FILE NAME: certhilsupabase.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ===============================
// SUPABASE CONFIG
// ===============================
const SUPABASE_URL = 'https://koegynrtboafzpxtmglw.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZWd5bnJ0Ym9hZnpweHRtZ2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNzM0MjQsImV4cCI6MjA4OTg0OTQyNH0.OnBujMbRBQ2-kJIY3qQsbW4Q-B_1mkeFJp30up_gnDY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ===============================
// REALTIME – TABELA ANOTACOES
// ===============================
supabase
  .channel('realtime-anotacoes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'anotacoes'
    },
    (payload) => {
      console.log('Alteração detectada no Supabase:', payload)

      // Se no seu index.html você tem algo como:
      // loadNotes()
      // renderNotes()
      // você pode chamar aqui via evento customizado
      window.dispatchEvent(new Event('supabase-update'))
    }
  )
  .subscribe()
