<script setup lang="ts">
import { ref } from 'vue';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  ArrowRight,
  Clock,
  ChevronDown
} from 'lucide-vue-next';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';
import { generateAdvisorWhatsAppLink, WHATSAPP_PHONE } from '../data/products';

defineEmits<{
  (e: 'goToCatalog'): void;
}>();

const contactEmail = 'contacto@akamikbeauty.com';
const emailCopied = ref(false);

const form = ref({
  name: '',
  email: '',
  reason: 'Asesoría personalizada para mi piel',
  message: '',
});

const formSubmitted = ref(false);

const reasons = [
  'Asesoría personalizada para mi piel',
  'Consulta sobre un producto o ingrediente',
  'Información sobre envíos y pedidos',
  'Alianzas comerciales o distribuidores',
  'Otro motivo'
];

const faqs = ref([
  {
    q: '¿Cómo puedo recibir asesoría personalizada para mi tipo de piel?',
    a: 'Puedes escribirnos directamente por WhatsApp haciendo clic en el botón de asesoría o en el botón flotante inferior. Nuestras especialistas evaluarán tu tipo de cutis, objetivos y te recomendarán la rutina coreana ideal paso a paso.',
    open: true,
  },
  {
    q: '¿Los productos son 100% originales de Corea del Sur?',
    a: 'Absolutamente. En Akami trabajamos de forma directa con distribuidores y laboratorios autorizados en Corea del Sur. Todas las marcas (Beauty of Joseon, COSRX, Anua, Medicube, etc.) cuentan con garantía total de autenticidad.',
    open: false,
  },
  {
    q: '¿Cuál es el tiempo de respuesta habitual?',
    a: 'Por WhatsApp respondemos en cuestión de minutos dentro de nuestro horario de atención (Lunes a Sábado de 9:00 AM a 7:00 PM). Por correo electrónico garantizamos una respuesta en menos de 24 horas hábiles.',
    open: false,
  },
  {
    q: '¿Realizan envíos a toda Venezuela?',
    a: 'Sí, realizamos envíos nacionales rápidos y asegurados mediante las principales agencias del país (MRW, Zoom, Tealca), con embalaje especial que protege y mantiene frescas cada una de las fórmulas cosméticas.',
    open: false,
  },
]);

function toggleFaq(index: number) {
  faqs.value[index].open = !faqs.value[index].open;
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(contactEmail);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2500);
  } catch {
    // Fallback simple
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2500);
  }
}

function handleSendEmail() {
  if (!form.value.name || !form.value.message) {
    alert('Por favor completa al menos tu nombre y tu mensaje.');
    return;
  }
  const subject = encodeURIComponent(`[Consulta Akami] ${form.value.reason} - ${form.value.name}`);
  const body = encodeURIComponent(
    `Nombre: ${form.value.name}\nCorreo: ${form.value.email || 'No indicado'}\nMotivo: ${form.value.reason}\n\nMensaje:\n${form.value.message}`
  );
  window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank');
  formSubmitted.value = true;
}

function handleSendWhatsApp() {
  if (!form.value.name || !form.value.message) {
    alert('Por favor completa al menos tu nombre y tu mensaje.');
    return;
  }
  const text = encodeURIComponent(
    `¡Hola, equipo de Akami! ✨ Mi nombre es *${form.value.name}*.\n\n📌 *Motivo de contacto:* ${form.value.reason}\n✉️ *Correo:* ${form.value.email || 'No indicado'}\n\n💬 *Mensaje:* ${form.value.message}`
  );
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  formSubmitted.value = true;
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    reason: 'Asesoría personalizada para mi piel',
    message: '',
  };
  formSubmitted.value = false;
}
</script>

<template>
  <div class="contact-page">
    <!-- SECCIÓN PRINCIPAL DE CONTACTO -->
    <section class="contact-hero-intro">
      <div class="contact-container">
        <div class="contact-header">
          <span class="contact-kicker">Atención & Asesoría Personalizada</span>
          <h2 class="contact-title">Estamos para acompañarte en tu ritual</h2>
          <div class="contact-divider"></div>
          <p class="contact-subtitle">
            En Akami entendemos que el cuidado de la piel es una experiencia íntima y personal. Si tienes preguntas sobre ingredientes, necesitas orientación para armar tu rutina o requieres información sobre pedidos y envíos, aquí estamos para escucharte.
          </p>
        </div>

        <!-- GRID PRINCIPAL (CANALES DE CONTACTO + FORMULARIO) -->
        <div class="contact-grid">
          <!-- COLUMNA IZQUIERDA: CANALES DIRECTOS -->
          <div class="contact-channels">
            <!-- TARJETA WHATSAPP OFICIAL -->
            <div class="contact-card contact-card--featured">
              <div class="contact-card-badge">Canal más rápido</div>
              <div class="contact-card-icon-wrap contact-card-icon--whatsapp">
                <WhatsAppIcon :size="28" />
              </div>
              <div class="contact-card-body">
                <h3 class="contact-card-title">Atención Directa por WhatsApp</h3>
                <p class="contact-card-desc">
                  Chatea en tiempo real con una de nuestras asesoras especializadas en cosmética coreana. Te orientamos sin costo en la selección de tus fórmulas.
                </p>
                <div class="contact-card-meta">
                  <Clock :size="15" />
                  <span>Lunes a Sábado: 9:00 AM – 7:00 PM (GMT-4)</span>
                </div>
                <a
                  :href="generateAdvisorWhatsAppLink()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-btn contact-btn--whatsapp"
                >
                  <WhatsAppIcon :size="18" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            <!-- TARJETA CORREO ELECTRÓNICO -->
            <div class="contact-card">
              <div class="contact-card-icon-wrap contact-card-icon--email">
                <Mail :size="24" />
              </div>
              <div class="contact-card-body">
                <h3 class="contact-card-title">Correo Electrónico Oficial</h3>
                <p class="contact-card-desc">
                  Escríbenos para consultas detalladas, cotizaciones empresariales, seguimiento de compras o dudas sobre nuestras marcas.
                </p>
                <div class="contact-email-box">
                  <a :href="`mailto:${contactEmail}`" class="contact-email-link">
                    {{ contactEmail }}
                  </a>
                  <button
                    @click="copyEmail"
                    type="button"
                    class="contact-copy-btn"
                    :title="emailCopied ? '¡Copiado al portapapeles!' : 'Copiar correo'"
                  >
                    <Check v-if="emailCopied" :size="15" class="text-emerald-600" />
                    <Copy v-else :size="15" />
                    <span>{{ emailCopied ? '¡Copiado!' : 'Copiar' }}</span>
                  </button>
                </div>
                <div class="contact-card-meta">
                  <Clock :size="15" />
                  <span>Respuesta garantizada en menos de 24 horas hábiles</span>
                </div>
              </div>
            </div>

            <!-- PILARES DE CONFIANZA AKAMI -->
            <div class="contact-trust-grid">
              <div class="contact-trust-item">
                <ShieldCheck :size="18" class="text-emerald-700" />
                <div>
                  <h4>100% Original</h4>
                  <p>Fórmulas coreanas auténticas y certificadas.</p>
                </div>
              </div>
              <div class="contact-trust-item">
                <Sparkles :size="18" class="text-amber-600" />
                <div>
                  <h4>Asesoría Genuina</h4>
                  <p>Guía experta enfocada en la salud de tu piel.</p>
                </div>
              </div>
              <div class="contact-trust-item">
                <Truck :size="18" class="text-sky-700" />
                <div>
                  <h4>Envíos Seguros</h4>
                  <p>Despachos a todo el territorio nacional.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- COLUMNA DERECHA: FORMULARIO ELEGANTE -->
          <div class="contact-form-wrapper">
            <div class="contact-form-card">
              <div class="contact-form-header">
                <h3 class="contact-form-title">Envíanos un mensaje directo</h3>
                <p class="contact-form-desc">
                  Completa el formulario y elige si deseas abrir tu cliente de correo o recibir atención inmediata por WhatsApp.
                </p>
              </div>

              <!-- MENSAJE DE ÉXITO -->
              <div v-if="formSubmitted" class="contact-form-success">
                <div class="contact-form-success-icon">
                  <Check :size="28" />
                </div>
                <h4>¡Mensaje generado con éxito!</h4>
                <p>
                  Si no se abrió automáticamente tu correo o WhatsApp, puedes iniciar el chat directamente con los botones de la izquierda.
                </p>
                <button @click="resetForm" class="contact-btn contact-btn--outline">
                  Enviar otro mensaje
                </button>
              </div>

              <!-- FORMULARIO -->
              <form v-else @submit.prevent="handleSendEmail" class="contact-form">
                <div class="form-group">
                  <label for="contact-name">Tu nombre completo <span class="required">*</span></label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Ej. Sofía Martínez"
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label for="contact-email">Correo electrónico (opcional)</label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label for="contact-reason">Motivo de contacto</label>
                  <select
                    id="contact-reason"
                    v-model="form.reason"
                    class="form-select"
                  >
                    <option v-for="r in reasons" :key="r" :value="r">
                      {{ r }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="contact-message">¿En qué podemos ayudarte? <span class="required">*</span></label>
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    required
                    rows="4"
                    placeholder="Cuéntanos sobre tu tipo de piel, dudas con productos o el pedido que deseas consultar..."
                    class="form-textarea"
                  ></textarea>
                </div>

                <div class="form-actions">
                  <button
                    type="button"
                    @click="handleSendWhatsApp"
                    class="contact-form-btn contact-form-btn--whatsapp"
                  >
                    <WhatsAppIcon :size="16" />
                    <span>Enviar a WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    class="contact-form-btn contact-form-btn--email"
                  >
                    <Send :size="16" />
                    <span>Enviar por Correo</span>
                  </button>
                </div>

                <p class="form-privacy-note">
                  🔒 Tus datos están protegidos. En Akami únicamente los utilizamos para responder a tu consulta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN DE PREGUNTAS FRECUENTES -->
    <section class="contact-faqs-section">
      <div class="contact-container">
        <div class="contact-faqs-header">
          <span class="contact-kicker">Dudas Habituales</span>
          <h3 class="contact-faqs-title">Preguntas Frecuentes</h3>
          <p class="contact-faqs-subtitle">
            Respuestas rápidas a las consultas más comunes de nuestra comunidad.
          </p>
        </div>

        <div class="contact-faqs-list">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="contact-faq-item"
            :class="{ 'contact-faq-item--open': faq.open }"
          >
            <button
              @click="toggleFaq(index)"
              class="contact-faq-trigger"
              :aria-expanded="faq.open"
            >
              <span class="contact-faq-question">{{ faq.q }}</span>
              <ChevronDown
                :size="18"
                class="contact-faq-arrow"
              />
            </button>
            <div v-show="faq.open" class="contact-faq-answer">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNER INVITACIÓN AL CATÁLOGO -->
    <section class="contact-cta-section">
      <div class="contact-container">
        <div class="contact-cta-box">
          <span class="contact-cta-kicker">Explora nuestra colección</span>
          <h3 class="contact-cta-title">¿Prefieres descubrir nuestras fórmulas coreanas?</h3>
          <p class="contact-cta-desc">
            Encuentra limpiadores, sueros de alta potencia, tónicos y protectores solares originales con los que transformar tu rutina de belleza.
          </p>
          <button @click="$emit('goToCatalog')" class="contact-cta-btn">
            <span>Ver catálogo completo</span>
            <ArrowRight :size="18" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
