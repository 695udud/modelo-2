/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE
 * ============================================================
 *  Todos os dados pessoais e comerciais do cliente ficam AQUI.
 *  Para criar um site para um novo advogado/escritório, basta
 *  editar este arquivo — todos os componentes leem estes valores.
 *
 *  ATENÇÃO (OAB — Provimento 205/2021):
 *  - Não inclua promessas de resultado, valores de honorários,
 *    depoimentos de clientes ou casos ganhos.
 *  - Mantenha linguagem informativa e sóbria.
 *
 *  Os valores abaixo são EXEMPLOS/PLACEHOLDERS e devem ser
 *  substituídos pelos dados reais do cliente.
 * ============================================================
 */
import fotoPadrao from "@/assets/advogado.jpg";

export const site = {
  // --- Identificação ---------------------------------------
  /** Nome completo do(a) advogado(a) */
  lawyerName: "Nome do Advogado",
  /** Nome do escritório (aparece no logotipo textual e rodapé) */
  officeName: "Nome Advocacia",
  /** Inscrição na OAB */
  oab: { number: "000.000", state: "SP" },
  /** Especialidade principal exibida no topo */
  specialty: "Advocacia Cível e Empresarial",
  /** Frase institucional (sem promessas de resultado) */
  tagline: "Atuação jurídica pautada pela ética, técnica e atendimento próximo.",

  // --- Contato ---------------------------------------------
  /** Telefone para exibição */
  phone: "(00) 0000-0000",
  /** WhatsApp: apenas números com DDI + DDD (ex.: 5511999999999) */
  whatsapp: "5500000000000",
  /** Mensagem inicial enviada pelo botão de WhatsApp */
  whatsappMessage: "Olá! Gostaria de agendar um atendimento.",
  email: "contato@seudominio.com.br",
  address: "Rua Exemplo, 000 — Sala 00",
  city: "Cidade",
  state: "UF",
  /** Horário de atendimento */
  hours: "Segunda a sexta, das 9h às 18h",

  // --- Redes sociais (deixe "" para ocultar) ----------------
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",

  // --- Imagens ---------------------------------------------
  /** Foto do profissional (importe outro arquivo ou use uma URL) */
  photo: fotoPadrao as string,
  /** Logotipo em imagem (URL). Deixe "" para usar o logotipo textual */
  logo: "",

  // --- Apresentação ----------------------------------------
  /** Parágrafos da seção "Sobre" */
  about: [
    "Escreva aqui uma breve apresentação do profissional: formação, trajetória e a forma como conduz o atendimento aos clientes.",
    "Use um tom informativo e discreto, sem mencionar resultados obtidos ou fazer comparações com outros profissionais.",
  ],

  /** Áreas de atuação (título + descrição curta) */
  practiceAreas: [
    { title: "Direito Civil", description: "Contratos, responsabilidade civil, obrigações e questões patrimoniais." },
    { title: "Direito de Família", description: "Divórcio, guarda, pensão alimentícia, inventário e partilha." },
    { title: "Direito Empresarial", description: "Assessoria a empresas, contratos societários e consultoria preventiva." },
    { title: "Direito do Consumidor", description: "Orientação em relações de consumo e defesa de direitos." },
    { title: "Direito Trabalhista", description: "Consultoria e acompanhamento em relações de trabalho." },
    { title: "Direito Imobiliário", description: "Compra e venda, locação, regularização e contratos imobiliários." },
  ],

  // --- SEO -------------------------------------------------
  seo: {
    title: "Nome do Advogado | Advocacia Cível e Empresarial",
    description: "Escritório de advocacia com atuação cível e empresarial. Atendimento ético e personalizado. Entre em contato.",
  },

  // --- Cores (hex) -----------------------------------------
  colors: {
    primary: "#101D32", // azul-marinho
    secondary: "#C5A15B", // dourado
  },
};

/** Link pronto do WhatsApp gerado a partir da configuração */
export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
