// certhilsupabase.js
// Usa o client global carregado no index.html

const supabase = window.supabase;

// ✅ Realtime – escuta mudanças na tabela anotacoes
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
      console.log('Alteração detectada no Supabase:', payload);
      window.dispatchEvent(new Event('supabase-update'));
    }
  )
  .subscribe();
