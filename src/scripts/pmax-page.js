const SELECTORS = {
  form: "#pmaxLeadForm",
  phone: "#pmaxPhone",
  status: "#pmaxFormStatus",
  submit: 'button[type="submit"]',
};

const FORM_CONFIG = {
  endpoint: "/api/send-lead.php",
  successUrl: "/obrigado-site-google-ads/",
  submitLabel: "Quero receber uma proposta",
  loadingLabel: "Enviando…",
};

const form = document.querySelector(SELECTORS.form);
const statusMessage = document.querySelector(SELECTORS.status);
const phoneInput = document.querySelector(SELECTORS.phone);

const formatBrazilianPhone = (value) => {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length > 11) digits = digits.slice(2);
  digits = digits.slice(0, 11);
  if (digits.length < 3) return digits ? `(${digits}` : "";
  const number = digits.slice(2);
  if (number.length <= 4) return `(${digits.slice(0, 2)}) ${number}`;
  const splitAt = number.length > 8 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${number.slice(0, splitAt)}-${number.slice(splitAt)}`;
};

const isValidBrazilianMobile = (value) => {
  const digits = value.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "");
  return /^[1-9]{2}9\d{7,8}$/.test(digits) && !/^(\d)\1+$/.test(digits);
};

const setSubmitState = (submitButton, isLoading) => {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading
    ? FORM_CONFIG.loadingLabel
    : FORM_CONFIG.submitLabel;
};

const trackLead = (formData) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    form_id: "site_google_ads_pmax",
    lead_project: formData.need,
    project_budget: formData.project_budget,
    media_budget: formData.media_budget,
  });
};

const sendLead = async (formData) => {
  const response = await fetch(FORM_CONFIG.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Não foi possível enviar a solicitação.");
  }
};

phoneInput?.addEventListener("input", () => {
  phoneInput.value = formatBrazilianPhone(phoneInput.value);
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusMessage.textContent = "";

  if (!form.reportValidity()) return;

  const formData = Object.fromEntries(new FormData(form));
  if (!isValidBrazilianMobile(formData.phone)) {
    statusMessage.textContent = "Informe um WhatsApp válido com DDD.";
    phoneInput.focus();
    return;
  }

  const submitButton = form.querySelector(SELECTORS.submit);
  setSubmitState(submitButton, true);

  try {
    await sendLead(formData);
    trackLead(formData);
    window.location.href = FORM_CONFIG.successUrl;
  } catch (error) {
    statusMessage.textContent =
      error.message || "Não foi possível enviar. Tente novamente.";
    setSubmitState(submitButton, false);
  }
});
