const sitesLeadForm = document.querySelector('#sitesLeadForm');
const sitesFormStatus = document.querySelector('#sitesFormStatus');
const sitesPhone = document.querySelector('#leadPhone');

const formatPhone = value => {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('55') && digits.length > 11) digits = digits.slice(2);
  digits = digits.slice(0, 11);
  if (digits.length < 3) return digits ? `(${digits}` : '';
  const number = digits.slice(2);
  if (number.length <= 4) return `(${digits.slice(0, 2)}) ${number}`;
  const splitAt = number.length > 8 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${number.slice(0, splitAt)}-${number.slice(splitAt)}`;
};

sitesPhone?.addEventListener('input', () => { sitesPhone.value = formatPhone(sitesPhone.value); });

sitesLeadForm?.addEventListener('submit', async event => {
  event.preventDefault();
  sitesFormStatus.textContent = '';
  if (!sitesLeadForm.reportValidity()) return;

  const data = Object.fromEntries(new FormData(sitesLeadForm));
  const phoneDigits = data.phone.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  if (!/^[1-9]{2}9\d{7,8}$/.test(phoneDigits) || /^(\d)\1+$/.test(phoneDigits)) {
    sitesFormStatus.textContent = 'Informe um WhatsApp válido com DDD.';
    sitesPhone.focus();
    return;
  }

  const submit = sitesLeadForm.querySelector('button[type="submit"]');
  submit.disabled = true;
  submit.textContent = 'Enviando…';
  try {
    const response = await fetch('/api/send-lead.php', {
      method: 'POST',
      headers: {'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify(data)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) throw new Error(result.message || 'Não foi possível enviar a solicitação.');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:'generate_lead',form_id:'sites_profissionais',lead_project:data.service});
    window.location.href = '/obrigado.html';
  } catch (error) {
    sitesFormStatus.textContent = error.message || 'Não foi possível enviar. Tente novamente.';
    submit.disabled = false;
    submit.textContent = 'Solicitar orçamento';
  }
});
