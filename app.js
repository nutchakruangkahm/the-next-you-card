// The Next You Card: Consent -> Profile -> Quiz -> Result
// Quiz UI shows ONLY A/B/C/D. Axis (E/C/M/U) stored behind the scenes.
// Result shows 1 of 24 characters (text card) + optional image if cards/<CODE>.png exists.

const questions = [
  {
    text: "ข้อ 1 หน่วยงานได้รับงานใหม่ที่ต้องส่งผลลัพธ์เชิงยุทธศาสตร์ แต่มีเวลาและทรัพยากรจำกัด คุณจะ…",
    choices: [
      { key: "A", axis: "E", label: "วางแผนและจัดลำดับงานใหม่เพื่อให้บรรลุ KPI และ OKR อย่างมีประสิทธิภาพ" },
      { key: "B", axis: "C", label: "ใช้ความเชี่ยวชาญของทีมเพื่อสร้างผลลัพธ์ที่เป็นประโยชน์ต่อสังคมและมหาวิทยาลัย" },
      { key: "C", axis: "M", label: "ตรวจสอบความถูกต้อง โปร่งใส และความเป็นธรรมของข้อมูลก่อนดำเนินการ" },
      { key: "D", axis: "U", label: "ประสานทุกฝ่ายเพื่อร่วมกันปรับแผนและเดินไปในทิศทางเดียวกัน" },
    ],
  },
  {
    text: "ข้อ 2 มีชุมชนเข้ามาขอความช่วยเหลือเรื่องปัญหาซับซ้อนที่เกี่ยวข้องกับหลายหน่วยงาน คุณจะ…",
    choices: [
      { key: "A", axis: "U", label: "ทำงานร่วมกับทุกฝ่ายเพื่อสร้างการเปลี่ยนแปลงร่วมกัน" },
      { key: "B", axis: "C", label: "เชื่อมโยงความรู้และงานวิชาการเพื่อแก้ปัญหาสังคม" },
      { key: "C", axis: "M", label: "รับฟังอย่างเป็นธรรมและไม่ตัดสินล่วงหน้า" },
      { key: "D", axis: "E", label: "นำข้อมูลมาวางแผนและออกแบบวิธีแก้เชิงรุก" },
    ],
  },
  {
    text: "ข้อ 3 คุณต้องส่งรายงานเชิงนโยบาย แต่ข้อมูลบางส่วนยังไม่สมบูรณ์ คุณจะ…",
    choices: [
      { key: "A", axis: "M", label: "ตรวจสอบความถูกต้องและความโปร่งใสก่อนสรุปผล" },
      { key: "B", axis: "C", label: "ใช้ความรู้เชิงวิชาการเพื่อสร้างคุณค่าและผลกระทบเชิงบวก" },
      { key: "C", axis: "E", label: "พัฒนาและปรับวิธีการทำงานให้ได้ผลลัพธ์ดีที่สุดภายใต้ข้อจำกัด" },
      { key: "D", axis: "U", label: "ประสานผู้เกี่ยวข้องเพื่อให้ข้อมูลครบถ้วนก่อนตัดสินใจ" },
    ],
  },
  {
    text: "ข้อ 4 ทีมมีความเห็นไม่ตรงกันเรื่องแนวทางดำเนินโครงการ คุณจะ…",
    choices: [
      { key: "A", axis: "M", label: "ใช้เหตุผลและความถูกต้องเป็นหลักในการตัดสินใจ" },
      { key: "B", axis: "E", label: "วางระบบการทำงานใหม่ให้ทีมทำงานได้มีประสิทธิภาพขึ้น" },
      { key: "C", axis: "U", label: "เชื่อมทุกฝ่ายให้เห็นเป้าหมายเดียวกัน" },
      { key: "D", axis: "C", label: "ใช้ความเชี่ยวชาญช่วยหาทางออกที่เกิดประโยชน์ต่อสังคม" },
    ],
  },
  {
    text: "ข้อ 5 นักศึกษามีปัญหาซับซ้อนและต้องการความช่วยเหลือเร่งด่วน คุณจะ…",
    choices: [
      { key: "A", axis: "M", label: "รับฟังและช่วยเหลือโดยยึดความเป็นธรรมและไม่ละเมิดสิทธิ" },
      { key: "B", axis: "C", label: "ใช้ความรู้และประสบการณ์เพื่อพัฒนาคุณภาพชีวิตของนักศึกษา" },
      { key: "C", axis: "U", label: "ประสานงานหลายฝ่ายเพื่อช่วยเหลืออย่างครบถ้วน" },
      { key: "D", axis: "E", label: "ออกแบบแนวทางช่วยเหลือใหม่ให้มีประสิทธิภาพมากขึ้น" },
    ],
  },
  {
    text: "ข้อ 6 มีโอกาสพัฒนาโครงการที่เกี่ยวข้องกับ SDGs และนวัตกรรมเพื่อสังคม คุณจะ…",
    choices: [
      { key: "A", axis: "C", label: "ใช้ความรู้วิชาการเพื่อสร้างประโยชน์ต่อสังคมและมนุษยชาติ" },
      { key: "B", axis: "E", label: "วางแผนและผลักดันให้เกิดผลลัพธ์ที่เป็นรูปธรรม" },
      { key: "C", axis: "U", label: "ทำงานร่วมกับเครือข่ายเพื่อให้เกิดการเปลี่ยนแปลงร่วมกัน" },
      { key: "D", axis: "M", label: "ตรวจสอบผลกระทบและความโปร่งใสของโครงการ" },
    ],
  },
  {
    text: "ข้อ 7 คุณต้องบริหารงบประมาณ/ทรัพย์สินของหน่วยงานให้เกิดประสิทธิภาพสูงสุด คุณจะ…",
    choices: [
      { key: "A", axis: "M", label: "ตรวจสอบความถูกต้อง โปร่งใส และตรวจสอบได้" },
      { key: "B", axis: "C", label: "คำนึงถึงผลกระทบต่อสังคมและความคุ้มค่าเชิงวิชาการ" },
      { key: "C", axis: "E", label: "วางแผนการใช้ทรัพยากรอย่างคุ้มค่าและสร้างผลลัพธ์สูงสุด" },
      { key: "D", axis: "U", label: "ประสานทุกฝ่ายให้ใช้ทรัพยากรร่วมกันอย่างเหมาะสม" },
    ],
  },
  {
    text: "ข้อ 8 มีนโยบายใหม่จากมหาวิทยาลัยที่ต้องปรับตัวอย่างรวดเร็ว คุณจะ…",
    choices: [
      { key: "A", axis: "E", label: "ปรับตัวและพัฒนาวิธีทำงานใหม่ให้ทันสถานการณ์" },
      { key: "B", axis: "C", label: "วิเคราะห์ผลกระทบต่อสังคมและงานบริการ" },
      { key: "C", axis: "M", label: "ปฏิบัติตามหลักความถูกต้องและความโปร่งใส" },
      { key: "D", axis: "U", label: "สื่อสารให้ทุกคนเข้าใจและปรับตัวไปด้วยกัน" },
    ],
  },
  {
    text: "ข้อ 9 คุณต้องสร้างผลงานเพื่อขอตำแหน่งทางวิชาการ คุณจะ…",
    choices: [
      { key: "A", axis: "E", label: "ผลักดันงานให้มีคุณภาพระดับความเป็นเลิศ" },
      { key: "B", axis: "U", label: "ทำงานร่วมกับเครือข่ายเพื่อเพิ่มคุณภาพงานวิจัย" },
      { key: "C", axis: "M", label: "ยึดหลักความถูกต้อง ตรวจสอบได้ และจริยธรรม" },
      { key: "D", axis: "C", label: "สร้างงานวิชาการที่ตอบโจทย์สังคมและใช้ได้จริง" },
    ],
  },
  {
    text: "ข้อ 10 เมื่อมองภาพรวมของการทำงานในมหาวิทยาลัย คุณเชื่อว่า “ความเป็นมหาวิทยาลัยที่ดี” คือ…",
    choices: [
      { key: "A", axis: "M", label: "องค์กรที่โปร่งใส ยุติธรรม และตรวจสอบได้" },
      { key: "B", axis: "C", label: "การใช้ความรู้เพื่อรับใช้สังคมและมนุษยชาติ" },
      { key: "C", axis: "U", label: "ชุมชนที่ร่วมมือกันอย่างเข้มแข็งและเกื้อกูลกัน" },
      { key: "D", axis: "E", label: "ระบบที่ทำงานได้อย่างมีประสิทธิภาพและพัฒนาอย่างต่อเนื่อง" },
    ],
  },
];

const CARD_FOLDER = "cards";
const CARD_EXT = "png";
const TIE_BREAK_ORDER = ["E", "C", "M", "U"];
const HIDE_AXIS_IN_SUMMARY = true;

// --- Character base (24) ---
const CHARACTER_MAP = {
  ECMU: { name: "The Visionary", meaning: "นักวางวิสัยทัศน์ มองไกล วางแผนสู่ความเป็นเลิศ" },
  ECUM: { name: "The Impact Maker", meaning: "ผู้สร้างผลลัพธ์ที่สร้างคุณค่าแก่ผู้คน" },
  EMCU: { name: "The Innovator", meaning: "นักสร้างสรรค์ที่เปลี่ยนไอเดียเป็นนวัตกรรม" },
  EMUC: { name: "The Ethical Pioneer", meaning: "ผู้นำการเปลี่ยนแปลงบนพื้นฐานคุณธรรม" },
  EUCM: { name: "The Collaborative Achiever", meaning: "นักขับเคลื่อนความสำเร็จผ่านพลังของทีม" },
  EUMC: { name: "The Team Catalyst", meaning: "ผู้จุดประกายศักยภาพของทีม" },
  CEMU: { name: "The Bridge Builder", meaning: "ผู้เชื่อมโยงมหาวิทยาลัย ชุมชน และผู้คน" },
  CEUM: { name: "The Community Driver", meaning: "ผู้ลงมือสร้างการเปลี่ยนแปลงเพื่อสังคม" },
  CMEU: { name: "The Social Mentor", meaning: "ผู้แบ่งปันความรู้และพัฒนาผู้คน" },
  CMUE: { name: "The Trusted Contributor", meaning: "ผู้รับใช้สังคมด้วยความน่าเชื่อถือ" },
  CUEM: { name: "The Community Partner", meaning: "พันธมิตรแห่งความร่วมมือ" },
  CUME: { name: "The Heart Connector", meaning: "ผู้เชื่อมโยงผู้คนด้วยความเข้าใจ" },
  MECU: { name: "The Integrity Leader", meaning: "ผู้นำที่ยึดมั่นในความถูกต้อง" },
  MEUC: { name: "The Honest Innovator", meaning: "นักพัฒนาที่เติบโตบนความซื่อสัตย์" },
  MCEU: { name: "The Ethical Connector", meaning: "ผู้เชื่อมโยงผู้คนด้วยคุณธรรม" },
  MCUE: { name: "The Social Guardian", meaning: "ผู้พิทักษ์ประโยชน์ส่วนรวม" },
  MUEC: { name: "The Harmony Keeper", meaning: "ผู้รักษาความสมดุลและความยุติธรรม" },
  MUCE: { name: "The Caring Guardian", meaning: "ผู้ดูแลผู้คนด้วยหัวใจและคุณธรรม" },
  UECM: { name: "The Team Visionary", meaning: "ผู้นำทีมที่มองเห็นอนาคตร่วมกัน" },
  UEMC: { name: "The Inspiring Captain", meaning: "กัปตันผู้สร้างแรงบันดาลใจให้ทีม" },
  UCEM: { name: "The Unity Ambassador", meaning: "ทูตแห่งความร่วมมือและการสื่อสาร" },
  UCME: { name: "The Collaboration Champion", meaning: "แชมป์แห่งการทำงานร่วมกัน" },
  UMEC: { name: "The Harmony Builder", meaning: "ผู้สร้างความสามัคคีและความไว้วางใจ" },
  UMCE: { name: "The People Guardian", meaning: "ผู้พิทักษ์ผู้คนและองค์กร" },
};

// --- Strengths standardized: 3 bullets, each references indicator clearly ---
const CHARACTER_DETAILS = {
  ECMU: {
    strengths: [
      "ตั้งเป้าหมาย-วางแผน-จัดทรัพยากรให้คุ้มค่า (Productivity)",
      "ปรับตัวไว รับบทบาทใหม่ พร้อมมองความท้าทาย (Adaptability)",
      "ยกระดับงานด้วยการเรียนรู้และปรับปรุงกระบวนการต่อเนื่อง (Self-Learning & Process Improvement)",
    ],
    challenge: "เสริมการทำงานร่วมกันและการรับฟังเพื่อให้ทีมมีส่วนร่วมมากขึ้น (Communication & Positive Feedback / Collaboration)",
  },
  ECUM: {
    strengths: [
      "กำหนดเป้าหมายชัดและผลักดันผลลัพธ์ให้สำเร็จ (Productivity)",
      "ยึดค่านิยมและนำความเชี่ยวชาญไปสร้างประโยชน์ร่วมกับสังคม (Apply Core Value)",
      "ปรับตัวและรับบทบาทใหม่เพื่อพางานไปให้ถึงเป้าหมาย (Adaptability)",
    ],
    challenge: "เพิ่มความโปร่งใส ตรวจสอบได้ และตัดสินใจอย่างเป็นธรรม (Governance)",
  },
  EMCU: {
    strengths: [
      "พัฒนางานด้วยการเรียนรู้และปรับปรุงกระบวนการจนเกิดแนวทางใหม่ (Self-Learning & Process Improvement)",
      "ยืดหยุ่น ปรับตัวไว พร้อมลองบทบาท/งานใหม่ (Adaptability)",
      "ทำงานร่วมกับผู้อื่นเพื่อผลักดันไอเดียให้เกิดจริง (Collaboration)",
    ],
    challenge: "ยึดหลักความโปร่งใส ตรวจสอบได้ และระวังผลกระทบก่อนเปลี่ยนแปลง (Governance)",
  },
  EMUC: {
    strengths: [
      "ยกระดับงานด้วยการเรียนรู้และพัฒนากระบวนการอย่างต่อเนื่อง (Self-Learning & Process Improvement)",
      "ทำงานโปร่งใส ตรวจสอบได้ ยึดหลักคุณธรรม (Governance)",
      "ปรับตัวไวและรับมือการเปลี่ยนแปลงได้ดี (Adaptability)",
    ],
    challenge: "ขยายการนำความรู้ไปสร้างประโยชน์ร่วมกับชุมชนให้ชัดขึ้น (Apply Core Value)",
  },
  EUCM: {
    strengths: [
      "วางแผนและขับเคลื่อนเป้าหมายให้สำเร็จด้วยทรัพยากรที่เหมาะสม (Productivity)",
      "ทำงานเป็นทีม ประสานความร่วมมือให้เกิดผลลัพธ์ร่วมกัน (Collaboration)",
      "ตัดสินใจโดยยึดประโยชน์ส่วนรวมเป็นหลัก (Public-mindedness)",
    ],
    challenge: "เสริมความชัดเจนในการสื่อสารและ feedback เพื่อให้ทีมเดินหน้าไวขึ้น (Communication & Positive Feedback)",
  },
  EUMC: {
    strengths: [
      "ยืดหยุ่นและปรับตัวได้ดีเมื่อเผชิญการเปลี่ยนแปลง (Adaptability)",
      "ทำงานเป็นทีมและประสานความร่วมมือจนบรรลุเป้าหมาย (Collaboration)",
      "พัฒนางานด้วยการเรียนรู้และปรับปรุงกระบวนการ (Self-Learning & Process Improvement)",
    ],
    challenge: "เพิ่มมิติการนำความรู้ไปสร้างประโยชน์ร่วมกับชุมชนให้มากขึ้น (Apply Core Value)",
  },
  CEMU: {
    strengths: [
      "นำความรู้/ทักษะไปสร้างประโยชน์ร่วมกับชุมชนและสังคม (Apply Core Value)",
      "มีส่วนร่วมและคำนึงถึงผลกระทบต่อชุมชนอย่างรอบด้าน (Community Participation)",
      "ทำงานเป็นทีมและเชื่อมความร่วมมือหลายฝ่าย (Collaboration)",
    ],
    challenge: "เสริมการตั้งเป้าหมายและแผนงานเชิงระบบเพื่อเพิ่มผลลัพธ์ระยะยาว (Productivity)",
  },
  CEUM: {
    strengths: [
      "ลงมือทำกิจกรรมเพื่อสังคมและคำนึงผลกระทบรอบด้าน (Community Participation)",
      "กำหนดเป้าหมายและผลักดันผลลัพธ์ให้เกิดจริง (Productivity)",
      "ยืดหยุ่น ปรับบทบาทและแนวทางตามสถานการณ์ (Adaptability)",
    ],
    challenge: "เพิ่มความโปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรมในทุกขั้นตอน (Governance)",
  },
  CMEU: {
    strengths: [
      "นำความรู้ไปสร้างประโยชน์และสนับสนุนการเติบโตของผู้อื่น (Apply Core Value)",
      "สื่อสาร-รับฟัง-ให้ feedback เชิงสร้างสรรค์ (Communication & Positive Feedback)",
      "ทำงานร่วมกับผู้อื่นเพื่อขับเคลื่อนเป้าหมายร่วม (Collaboration)",
    ],
    challenge: "เพิ่มความกล้าลองและพัฒนากระบวนการให้ดีขึ้นอย่างต่อเนื่อง (Self-Learning & Process Improvement)",
  },
  CMUE: {
    strengths: [
      "ยึดค่านิยมและนำความเชี่ยวชาญไปสร้างประโยชน์ต่อสังคม (Apply Core Value)",
      "โปร่งใส ตรวจสอบได้ และซื่อสัตย์ในการทำงาน (Governance)",
      "ตัดสินใจโดยยึดประโยชน์ส่วนรวมเป็นหลัก (Public-mindedness)",
    ],
    challenge: "เสริมการพัฒนาตนเองและนวัตกรรมเพื่อยกระดับผลลัพธ์ (Self-Learning & Process Improvement)",
  },
  CUEM: {
    strengths: [
      "มีส่วนร่วมกับชุมชนและคำนึงถึงผลกระทบอย่างรอบด้าน (Community Participation)",
      "สื่อสาร-รับฟัง-ให้ข้อเสนอแนะเชิงพัฒนา (Communication & Positive Feedback)",
      "ทำงานเป็นทีมและประสานความร่วมมือให้สำเร็จ (Collaboration)",
    ],
    challenge: "เพิ่มการยืนหยัดในความถูกต้อง โปร่งใส และตรวจสอบได้ (Governance)",
  },
  CUME: {
    strengths: [
      "เคารพสิทธิ รับฟังความเห็นที่แตกต่างอย่างเปิดใจ (Respect for rights)",
      "สื่อสารเพื่อสร้างความเข้าใจร่วมและ feedback เชิงบวก (Communication & Positive Feedback)",
      "ทำงานเป็นทีมและให้เครดิตเพื่อนร่วมงาน (Appreciation)",
    ],
    challenge: "เสริมการตั้งเป้าหมายและวางแผนเชิงระบบให้ชัดขึ้น (Productivity)",
  },
  MECU: {
    strengths: [
      "โปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรม (Governance)",
      "เคารพสิทธิและรับฟังความเห็นที่แตกต่าง (Respect for rights)",
      "ทำงานร่วมกับผู้อื่นเพื่อเป้าหมายเดียวกัน (Collaboration)",
    ],
    challenge: "เพิ่มการสื่อสารเชิงบวกและให้ feedback เพื่อสร้างพลังทีม (Communication & Positive Feedback)",
  },
  MEUC: {
    strengths: [
      "โปร่งใส ซื่อสัตย์ และปฏิบัติอย่างเป็นธรรม (Governance)",
      "พัฒนากระบวนการทำงานด้วยการเรียนรู้ต่อเนื่อง (Self-Learning & Process Improvement)",
      "นำความรู้ไปสร้างประโยชน์ร่วมกับสังคม (Apply Core Value)",
    ],
    challenge: "เสริมการทำงานร่วมกันให้เกิดการมีส่วนร่วมกว้างขึ้น (Collaboration)",
  },
  MCEU: {
    strengths: [
      "เคารพสิทธิ รับฟังความเห็นที่แตกต่าง (Respect for rights)",
      "ทำงานโปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรม (Governance)",
      "สื่อสารและให้ feedback เชิงสร้างสรรค์ (Communication & Positive Feedback)",
    ],
    challenge: "เพิ่มความกล้าปรับปรุงวิธีทำงาน/ทดลองแนวทางใหม่ (Self-Learning & Process Improvement)",
  },
  MCUE: {
    strengths: [
      "ตัดสินใจโดยยึดประโยชน์ส่วนรวมมากกว่าส่วนตน (Public-mindedness)",
      "โปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรม (Governance)",
      "ดูแลภาพลักษณ์และผลประโยชน์ขององค์กรร่วม (Sense of belonging)",
    ],
    challenge: "เสริมการเรียนรู้และพัฒนากระบวนการเพื่อยกระดับผลลัพธ์ (Self-Learning & Process Improvement)",
  },
  MUEC: {
    strengths: [
      "ทำงานเป็นทีมและสร้างความร่วมมืออย่างสร้างสรรค์ (Collaboration)",
      "เคารพสิทธิและรับฟังความเห็นที่แตกต่าง (Respect for rights)",
      "ตัดสินใจโดยยึดประโยชน์ส่วนรวม (Public-mindedness)",
    ],
    challenge: "ขยายการนำความรู้ไปสร้างประโยชน์ร่วมกับชุมชนให้เด่นขึ้น (Apply Core Value)",
  },
  MUCE: {
    strengths: [
      "เคารพสิทธิและรับฟังอย่างเปิดใจ (Respect for rights)",
      "โปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรม (Governance)",
      "ให้บริการด้วยความเต็มใจ ใส่ใจผู้รับบริการ (Excellence Service)",
    ],
    challenge: "เสริมการตั้งเป้าหมายและผลักดันผลลัพธ์ให้ชัดเจนขึ้น (Productivity)",
  },
  UECM: {
    strengths: [
      "ทำงานเป็นทีมและเชื่อมความร่วมมือหลายฝ่าย (Collaboration)",
      "สื่อสาร-รับฟัง-ให้ feedback เชิงสร้างสรรค์ (Communication & Positive Feedback)",
      "ปรับตัวไวและรับบทบาทใหม่ได้ดี (Adaptability)",
    ],
    challenge: "ยึดหลักความโปร่งใส ตรวจสอบได้ และตัดสินใจอย่างเป็นธรรม (Governance)",
  },
  UEMC: {
    strengths: [
      "สื่อสาร-รับฟัง-ให้ feedback เชิงบวกเพื่อขับเคลื่อนทีม (Communication & Positive Feedback)",
      "ให้กำลังใจและให้เครดิตเพื่อนร่วมทีมอย่างเหมาะสม (Appreciation)",
      "ทำงานเป็นทีมและประสานความร่วมมือให้สำเร็จ (Collaboration)",
    ],
    challenge: "ขยายการใช้ความรู้ไปสร้างประโยชน์ร่วมกับชุมชนให้ชัดขึ้น (Apply Core Value)",
  },
  UCEM: {
    strengths: [
      "ทำงานเป็นทีมและสร้างความร่วมมือระหว่างหน่วยงาน (Collaboration)",
      "สื่อสารตรงประเด็น รับฟังรอบด้าน และ feedback สร้างสรรค์ (Communication & Positive Feedback)",
      "คำนึงผลกระทบและมีส่วนร่วมกับชุมชน/สังคม (Community Participation)",
    ],
    challenge: "ยึดหลักโปร่งใส ตรวจสอบได้ และความเป็นธรรมในการตัดสินใจ (Governance)",
  },
  UCME: {
    strengths: [
      "ทำงานเป็นทีม เปิดพื้นที่ให้ทุกคนมีส่วนร่วม (Collaboration)",
      "สื่อสารเชิงพัฒนาและสร้างความเข้าใจร่วม (Communication & Positive Feedback)",
      "เคารพสิทธิและรับฟังความเห็นที่แตกต่าง (Respect for rights)",
    ],
    challenge: "เพิ่มการตั้งเป้าหมายและยกระดับผลลัพธ์ให้สูงขึ้น (Productivity)",
  },
  UMEC: {
    strengths: [
      "สร้างความเป็นเจ้าของร่วมและปกป้องผลประโยชน์องค์กร (Sense of belonging)",
      "ทำงานเป็นทีมและลดความขัดแย้งด้วยความร่วมมือ (Collaboration)",
      "เคารพสิทธิและรับฟังความเห็นที่แตกต่าง (Respect for rights)",
    ],
    challenge: "ขยายการมีส่วนร่วมกับชุมชนและคำนึงผลกระทบให้มากขึ้น (Community Participation)",
  },
  UMCE: {
    strengths: [
      "ดูแลผู้คนและให้เครดิตเพื่อนร่วมทีมอย่างเหมาะสม (Appreciation)",
      "สื่อสาร-รับฟัง-ให้ feedback เชิงสร้างสรรค์ (Communication & Positive Feedback)",
      "โปร่งใส ตรวจสอบได้ และยึดหลักคุณธรรม (Governance)",
    ],
    challenge: "เพิ่มการเรียนรู้และพัฒนากระบวนการเพื่อยกระดับงาน (Self-Learning & Process Improvement)",
  },
};

// --- CMU Mission: by LAST LETTER of code ---
const MISSION_BY_LETTER = {
  E: {
    title: "💜 เติมพลัง Excellent",
    body: "พัฒนาทักษะใหม่ ๆ กล้าสร้างนวัตกรรม และมุ่งมั่นสู่ความเป็นเลิศอย่างต่อเนื่อง ผ่านคลิป Excellent",
  },
  C: {
    title: "💜 เติมพลัง Community Engagement",
    body: "นำองค์ความรู้และความเชี่ยวชาญออกไปสร้างคุณค่าให้กับชุมชนและสังคม ผ่านคลิป Community Engagement",
  },
  M: {
    title: "💜 เติมพลัง Morality",
    body: "ตัดสินใจด้วยความซื่อสัตย์ โปร่งใส ตรวจสอบได้ เคารพสิทธิ และยึดประโยชน์ส่วนรวม ผ่านคลิป Morality",
  },
  U: {
    title: "💜 เติมพลัง Unity",
    body: "สร้างความร่วมมือผ่านการสื่อสาร การรับฟัง การให้เครดิต และการทำงานเป็นทีม เพื่อให้ทุกภารกิจเดินหน้าไปด้วยกัน ผ่านคลิป Unity",
  },
};

// --- Org dropdown data ---
const ORG_DATA = {
  "สำนักงานสภามหาวิทยาลัย": ["สำนักงานสภามหาวิทยาลัย"],
  "สำนักงานมหาวิทยาลัย": [
    "กองกฎหมาย",
    "กองคลัง",
    "กองทรัพยากรทุนมนุษย์",
    "กองบริหารงานกลาง",
    "กองแผนงาน",
    "กองพัฒนานักศึกษา",
    "ศูนย์การศึกษามหาวิทยาลัยเชียงใหม่",
    "ศูนย์นวัตกรรมการสอนและการเรียนรู้",
    "ศูนย์บริหารการจัดการความปลอดภัยอาชีวอนามัยและสภาพแวดล้อมในการทำงานมหาวิทยาลัยเชียงใหม่",
    "ศูนย์บริหารจัดการเมืองเพื่อความยั่งยืน",
    "ศูนย์บริหารพันธกิจสากล",
    "ศูนย์ประสานงานวิชาการ",
    "ศูนย์พัฒนาคุณภาพองค์กร",
    "ศูนย์ส่งเสริมพฤฒพลังผู้สูงอายุ มช",
    "ศูนย์สื่อสารองค์กรและนักศึกษาเก่าสัมพันธ์",
    "สำนักงานขับเคลื่อนกลยุทธ์ศาสตร์",
    "สำนักงานบริหารงานวิจัย",
    "สำนักงานบริหารงานและจัดการทรัพย์สิน",
    "สำนักงานหอพักนักศึกษา",
    "สำนักงานสภาพนักงาน",
  ],
  "ส่วนงานวิชาการ": [
    "คณะการสื่อสารมวลชน",
    "คณะเกษตรศาสตร์",
    "คณะทันตแพทยศาสตร์",
    "คณะเทคนิคการแพทย์",
    "คณะนิติศาสตร์",
    "คณะบริหารธุรกิจ",
    "คณะพยาบาลศาสตร์",
    "คณะแพทยศาสตร์",
    "คณะเภสัชศาสตร์",
    "คณะมนุษยศาสตร์",
    "คณะรัฐศาสตร์และรัฐประศาสนศาสตร์",
    "คณะวิจิตรศิลป์",
    "คณะวิทยาศาสตร์",
    "คณะวิศวกรรมศาสตร์",
    "คณะศึกษาศาสตร์",
    "คณะเศรษฐศาสตร์",
    "คณะสถาปัตยกรรมศาสตร์",
    "คณะสังคมศาสตร์",
    "คณะสัตวแพทยศาสตร์",
    "คณะสาธารณสุขศาสตร์",
    "คณะอุตสาหกรรมเกษตร",
    "วิทยาลัยนานาชาตินวัตกรรมดิจิทัล",
    "วิทยาลัยพหุวิทยาการและสหวิทยาการ",
    "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี",
    "สถาบันนโยบายสาธารณะ",
    "สถาบันวิศวกรรมชีวการแพทย์",
  ],
  "ส่วนงานอื่น": [
    "วิทยาลัยการศึกษาตลอดชีวิต",
    "สถาบันนโยบายสาธารณะ",
    "สถาบันภาษา",
    "สถาบันวิจัยและพัฒนาพลังงานนครพิงค์",
    "สถาบันวิศวกรรมชีวการแพทย์",
    "ศูนย์แก้ไขความพิการบนในหน้าและกะโหลกศีรษะ",
    "มูลนิธิเทคโนโลยี สารสนเทศตามพระราชดำริ มช.",
    "ศูนย์วิจัยข้าวล้านนา",
    "อุทยานวิทยาศาสตร์และเทคโนโลยี",
    "สำนักทะเบียนประมวลผล",
    "สำนักบริการเทคโนโลยีสารสนเทศ",
    "สำนักบริการวิชาการ",
    "สำนักพัฒนาคุณภาพการศึกษา",
    "สำนักส่งเสริมศิลปวัฒนธรรมและล้านนาสร้างสรรค์",
    "สำนักหอสมุด",
  ],
};

// ---- State ----
let idx = 0;
const state = {
  consent: false,
  profile: { fullName: "", orgGroup: "", orgUnit: "" },
  scores: { E: 0, C: 0, M: 0, U: 0 },
  answers: Array((window.questions?.length || 0)).fill(null),
};

// ---- DOM panels ----
const consentPanel = document.getElementById("consentPanel");
const profilePanel = document.getElementById("profilePanel");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");

// Consent
const consentChk = document.getElementById("consentChk");
const toProfileBtn = document.getElementById("toProfileBtn");
function syncConsentButton() {
  if (!toProfileBtn) return;
  const ok = !!consentChk && consentChk.checked === true;

  toProfileBtn.disabled = !ok;

  // optional: ให้เห็นชัดว่ากดได้/ไม่ได้
  toProfileBtn.style.opacity = ok ? "1" : "0.55";
  toProfileBtn.style.cursor  = ok ? "pointer" : "not-allowed";
}

// ซิงก์ครั้งแรกตอนโหลดหน้า
syncConsentButton();

// ติ๊ก/ยกเลิกติ๊ก -> ปรับปุ่ม
consentChk?.addEventListener("change", syncConsentButton);

// กดปุ่มแล้วไปหน้า Profile
toProfileBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (!consentChk?.checked) return;
  showPanel("profile");
  initOrgGroupDropdown();
  updateOrgUnitDropdown(orgGroupEl.value || "");
});


// Profile
const backToConsentBtn = document.getElementById("backToConsentBtn");
const startQuizBtn = document.getElementById("startQuizBtn");
const fullNameEl = document.getElementById("fullName");
const orgGroupEl = document.getElementById("orgGroup");
const orgUnitEl = document.getElementById("orgUnit");
orgGroupEl?.addEventListener("change", (e) => {
  updateOrgUnitDropdown(e.target.value);
});
const nameHint = document.getElementById("nameHint");
const groupHint = document.getElementById("groupHint");
const unitHint = document.getElementById("unitHint");

// Quiz
const qText = document.getElementById("qText");
const choicesEl = document.getElementById("choices");
const bar = document.getElementById("bar");
const stepText = document.getElementById("stepText");
const backBtn = document.getElementById("backBtn");
const resetBtn = document.getElementById("resetBtn");

// Result
const playAgainBtn = document.getElementById("playAgainBtn");
const copyResultBtn = document.getElementById("copyResultBtn");
const shareBtn = document.getElementById("shareBtn");
const saveBtn = document.getElementById("saveBtn");

const profilePreview = document.getElementById("profilePreview");
const answersPreview = document.getElementById("answersPreview");
const resultSubtitle = document.getElementById("resultSubtitle");
const resultCode = document.getElementById("resultCode");
const resultImg = document.getElementById("resultImg");
const permText = document.getElementById("permText");
const fileText = document.getElementById("fileText");

const textCard = document.getElementById("textCard");
const charNameInline = document.getElementById("charNameInline");
const charName = document.getElementById("charName");
const charMeaning = document.getElementById("charMeaning");
const charStrengths = document.getElementById("charStrengths");
const charChallenge = document.getElementById("charChallenge");
const charMission = document.getElementById("charMission");

// ---- Helpers ----
function showPanel(name) {
  [consentPanel, profilePanel, quizPanel, resultPanel].forEach(p => p.classList.add("hidden"));
  if (name === "consent") consentPanel.classList.remove("hidden");
  if (name === "profile") profilePanel.classList.remove("hidden");
  if (name === "quiz") quizPanel.classList.remove("hidden");
  if (name === "result") resultPanel.classList.remove("hidden");
}
function spawnStarBurst(x, y, opts = {}) {
  const now = Date.now();
  if(now - __lastBurstAt < (opts.throttleMs ?? 90)) return;
  __lastBurstAt = now;

  const n = opts.count ?? 10;
  const spread = opts.spread ?? 24;

  const root = document.createElement("div");

  // ✅ ถ้าอยู่หน้า quiz ให้ใช้โทนสีม่วง-เหลือง
  const onQuiz = document.body.classList.contains("onQuiz");
  root.className = onQuiz ? "star-burst quiz" : "star-burst";

  root.style.transform = `translate(${x}px, ${y}px)`;

  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    const a = (Math.PI * 2 * i) / n + (Math.random() * 0.28);
    const r = (spread * 0.45) + Math.random() * spread;

    const dx = Math.cos(a) * r;
    const dy = Math.sin(a) * r;

    p.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    p.style.setProperty("--dy", `${dy.toFixed(1)}px`);

    const s = 0.7 + Math.random() * 0.9;
    p.style.width = `${(5.2 * s).toFixed(1)}px`;
    p.style.height = `${(5.2 * s).toFixed(1)}px`;

    // ✅ โทนสี: ม่วง/เหลือง (สลับแบบสุ่ม)
    if(onQuiz){
      if(Math.random() < 0.55) p.classList.add("purple");
      else p.classList.add("yellow");
    }else{
      // เดิม: สุ่มคลาส c1/c2/c3 (ถ้าพี่ยังใช้)
      const c = ["", "c1", "c2", "c3"][Math.floor(Math.random() * 4)];
      if (c) p.classList.add(c);
    }

    p.style.animationDelay = `${(Math.random() * 90).toFixed(0)}ms`;
    root.appendChild(p);
  }

  document.body.appendChild(root);
  setTimeout(() => root.remove(), 700);
}

// ผูกเอฟเฟกต์กับการคลิกทั่วหน้า (เลือกได้)
// ถ้าพี่อยากให้เกิดเฉพาะปุ่ม ให้ไปเรียก spawnStarBurst ใน handler ปุ่มแทน
document.addEventListener("click", (e) => {
  // กันคลิกพวก input/textarea จะได้ไม่รำคาญ
  const tag = (e.target?.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return;

  spawnStarBurst(e.clientX, e.clientY, { count: 10, spread: 24 });
});

// ---------- Result Reveal helper ----------
function animateResultPanelOnce(){
  // เปลี่ยน selector นี้ให้ตรงกับ panel result ของพี่ถ้าชื่อไม่เหมือน
  const panel = document.getElementById("panelResult") || document.querySelector('[data-panel="result"]') || document.querySelector(".panel.result") || document.querySelector("#resultPanel");
  if(!panel) return;

  panel.classList.remove("resultReveal");
  // force reflow ให้ animation เล่นซ้ำได้ทุกครั้งที่เข้า result
  void panel.offsetWidth;
  panel.classList.add("resultReveal");
}
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function rebuildScores() {
  state.scores = { E: 0, C: 0, M: 0, U: 0 };
  state.answers.forEach((a) => { if (a) state.scores[a.axis] += 1; });
}

function updateProgressUI() {
  const answered = state.answers.filter(Boolean).length;
  bar.style.width = Math.round((answered / questions.length) * 100) + "%";
  stepText.textContent = `ข้อ ${idx + 1}/${questions.length}`;
  backBtn.disabled = idx === 0;
}

// ---- Org dropdown ----
function initOrgGroupDropdown() {
  const groups = Object.keys(ORG_DATA);
  orgGroupEl.innerHTML =
    `<option value="">— เลือกกลุ่มหน่วยงานหลัก —</option>` +
    groups.map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
}

function updateOrgUnitDropdown(group) {
  const units = ORG_DATA[group] || [];
  orgUnitEl.innerHTML =
    `<option value="">— เลือกหน่วยงาน/ส่วนงาน —</option>` +
    units.map(u => `<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join("");
  orgUnitEl.value = "";
}

function validateProfile() {
  let ok = true;
  nameHint.textContent = "";
  groupHint.textContent = "";
  unitHint.textContent = "";

  const fullName = fullNameEl.value.trim();
  const group = orgGroupEl.value.trim();
  const unit = orgUnitEl.value.trim();

  if (!fullName) { nameHint.textContent = "กรุณากรอกชื่อ-นามสกุล"; ok = false; }
  if (!group) { groupHint.textContent = "กรุณาเลือกกลุ่มหน่วยงานหลัก"; ok = false; }
  if (!unit) { unitHint.textContent = "กรุณาเลือกหน่วยงาน/ส่วนงาน"; ok = false; }

  return { ok, fullName, group, unit };
}

// ---- Quiz ----
function renderQuestion() {
  const q = questions[idx];
  qText.textContent = q.text;
  choicesEl.innerHTML = "";

  q.choices.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.innerHTML = `
      <div><span class="badge">${c.key}</span></div>
      <small>${c.label}</small>
    `;
    btn.addEventListener("click", () => selectChoice(c));
    choicesEl.appendChild(btn);
  });

  updateProgressUI();
}

function selectChoice(choice) {
  state.answers[idx] = { q: idx + 1, key: choice.key, axis: choice.axis };
  rebuildScores();
  updateProgressUI();

  if (idx < questions.length - 1) {
    idx += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

// ---- Result compute ----
function computePermutation(scores) {
  const axes = ["E", "C", "M", "U"];
  axes.sort((a, b) => {
    const d = scores[b] - scores[a];
    if (d !== 0) return d;
    return TIE_BREAK_ORDER.indexOf(a) - TIE_BREAK_ORDER.indexOf(b);
  });
  return axes.join("");
}

function missionFromLastLetter(code){
  const last = code.slice(-1);
  const m = MISSION_BY_LETTER[last];
  if(!m) return "";
  return `${m.title}\n${m.body}`;
}

function fillTextCard(code){
  const base = CHARACTER_MAP[code];
  const detail = CHARACTER_DETAILS[code];

  const displayName = base ? `${code} : ${base.name}` : `${code} : (Unknown)`;
  const meaning = base?.meaning || "—";

  permText.textContent = code;
  charNameInline.textContent = base?.name || "—";
  charName.textContent = displayName;
  charMeaning.textContent = meaning;

  // strengths 
  charStrengths.innerHTML = "";
  (detail?.strengths || []).forEach(s=>{
    const li = document.createElement("li");
    li.textContent = s;
    charStrengths.appendChild(li);
  });

  charChallenge.textContent = detail?.challenge || "—";
  charMission.textContent = missionFromLastLetter(code);
}
const CODE_TO_NUMBER = {
  ECMU: 1, // The Visionary
  ECUM: 2, // The Impact Maker
  EMCU: 3, // The Innovator
  EMUC: 4, // The Ethical Pioneer
  EUCM: 5, // The Collaborative Achiever
  EUMC: 6, // The Team Catalyst

  CEMU: 7,
  CEUM: 8,
  CMEU: 9,
  CMUE: 10,
  CUEM: 11,
  CUME: 12,
  MECU: 13,
  MEUC: 14,
  MCEU: 15,

  MCUE: 16,
  MUEC: 17,
  MUCE: 18,
  UCEM: 19,
  UCME: 20,
  UECM: 21,
  UEMC: 22,
  UMCE: 23,
  UMEC: 24,
};

function toNumberedCardCode(code){
  const n = CODE_TO_NUMBER[code];
  if (!n) return null; // ยังไม่มีรูปของผลลัพธ์นี้
  return `ECMU-${String(n).padStart(2, "0")}`; // ECMU-01..06
}
function setResultProcessing(on){
  const card = document.querySelector(".resultCard");
  if(!card) return;
  card.classList.toggle("is-processing", !!on);
}
const spaceField = document.getElementById("introCardField") || introOverlay;
if (spaceField) {
  // สร้างดาวดวงเล็กๆ 25 ดวง กระจายฉากหลังให้ดูไม่โล่ง
  for (let s = 0; s < 25; s++) {
    const star = document.createElement("div");
    star.className = "bg-glitter-star";
    star.style.position = "absolute";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.width = Math.random() * 3 + 1 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = Math.random() > 0.5 ? "#ffca46" : "#5ae6ff";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random() * 0.5 + 0.2;
    star.style.pointerEvents = "none";
    // สั่งให้ดาวกะพริบลึกลับจางๆ
    star.style.animation = `coreAwaken ${2 + Math.random() * 3}s ease-in-out infinite`;
    spaceField.appendChild(star);
  }
}
// =========================================================
// 🔄 วางแทนกลุ่มฟังก์ชันประมวลผลเดิม (เวอร์ชัน E C M U + พายุหมุนสมบูรณ์)
// =========================================================
function showResultProcessing() {
  const el = document.getElementById("resultProcessing");
  const introOverlay = document.getElementById("introOverlay");
  if (!el) return;

  el.classList.remove("hidden");
  el.classList.remove("boom");
  el.classList.add("on");
  el.setAttribute("aria-hidden", "false");

  if (introOverlay) {
    introOverlay.className = "s1";
    
    // บังคับหา Container หลักสำหรับเคลียร์พื้นที่ก่อนสร้างอะไรลงไป
    const field = document.getElementById("introCardField") || introOverlay;
    field.innerHTML = ""; // ✅ ย้ายมาล้างกระดานตรงนี้เป็นจุดแรก (ป้องกันการลบการ์ด ECMU)

    // =========================================================
    // 🃏 ขั้นตอนที่ 1: เสกการ์ดตัวอักษรหลัก 4 ใบ (E, C, M, U)
    // =========================================================
    const coreContainer = document.createElement("div");
    coreContainer.className = "core-cards-container";
    
    const letters = ['E', 'C', 'M', 'U'];
    const classes = ['card-e', 'card-c', 'card-m', 'card-u'];
    
    letters.forEach((letter, index) => {
      const letterCard = document.createElement("div");
      letterCard.className = `core-letter-card ${classes[index]}`;
      letterCard.innerText = letter;
      coreContainer.appendChild(letterCard);
    });
    
    field.appendChild(coreContainer);

    // =========================================================
    // 🌀 ขั้นตอนที่ 2: เสกเศษการ์ดบริวาร 8 ใบ พร้อมองศาพายุทอร์นาโดลื่นๆ
    // =========================================================
    const cardCount = 8; 
    for (let i = 0; i < cardCount; i++) {
      const card = document.createElement("div");
      card.className = "dynamic-intro-card";
      
      // 📐 พิกัดลอยคว้างรอบแรก (ซีน s1 - s2)
      const angle = (i * (Math.PI * 2) / cardCount) + (Math.random() * 0.4);
      const radius = 25 + Math.random() * 20; 
      
      const scatterX = (Math.cos(angle) * radius) + "vw";
      const scatterY = (Math.sin(angle) * radius - 10) + "vh"; 
      const scatterZ = (-150 - Math.random() * 350) + "px"; 
      
      const rx = (Math.random() * 90 - 45) + "deg";
      const ry = (Math.random() * 90 - 45) + "deg";
      const rz = (Math.random() * 180 - 90) + "deg";

      // 🌪️ สุ่มมุมเฉียงเฉพาะตัวสำหรับท่าม้วนเป็นพายุในซีน s3a (แก้ปัญหากระตุกและทื่อ)
      const vortexRx = (360 + Math.random() * 360) * (Math.random() > 0.5 ? 1 : -1) + "deg";
      const vortexRy = (360 + Math.random() * 720) * (Math.random() > 0.5 ? 1 : -1) + "deg";
      const vortexRz = (720 + (i * 90) + Math.random() * 180) + "deg";

      // ฝังค่าเข้ากลุ่ม CSS Variables เพื่อส่งให้การ์ดจอ (GPU) คำนวณแบบ 60FPS
      card.style.setProperty("--scatter-x", scatterX);
      card.style.setProperty("--scatter-y", scatterY);
      card.style.setProperty("--scatter-z", scatterZ);
      card.style.setProperty("--rx", rx);
      card.style.setProperty("--ry", ry);
      card.style.setProperty("--rz", rz);
      
      card.style.setProperty("--vortex-rx", vortexRx);
      card.style.setProperty("--vortex-ry", vortexRy);
      card.style.setProperty("--vortex-rz", vortexRz);

      field.appendChild(card);
    }
  }
}

function boomResultProcessing() {
  const el = document.getElementById("resultProcessing");
  const introOverlay = document.getElementById("introOverlay");
  if (!el) return;

  if (introOverlay) introOverlay.className = "s4";

  el.classList.remove("boom");
  void el.offsetWidth; // force reflow
  el.classList.add("boom");

  if (typeof spawnStarBurst === "function") {
    // ปรับละอองดาวระเบิดให้ฟุ้งอลังการขึ้นตอนปิดจังหวะแฟลช
    spawnStarBurst(window.innerWidth / 2, window.innerHeight / 2, { count: 25, spread: 55 });
  }
}
function hideResultProcessing() {
  const el = document.getElementById("resultProcessing");
  const introOverlay = document.getElementById("introOverlay");
  if (!el) return;

  if (introOverlay) introOverlay.className = "s5";

  el.classList.add("hidden");
  el.classList.remove("on");
  el.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    el.classList.remove("boom");
    if (introOverlay) {
      introOverlay.querySelectorAll(".dynamic-intro-card").forEach(c => c.remove());
    }
  }, 1100);
}
function playResultReveal(){
  const panel = document.getElementById("resultPanel");
  if(!panel) return;
  panel.classList.remove("resultReveal");
  void panel.offsetWidth; // force reflow for replay
  panel.classList.add("resultReveal");
}

/* click burst: every click (light throttle) */
let __lastBurstAt = 0;
function spawnStarBurst(x, y, opts = {}) {
  const now = Date.now();
  if(now - __lastBurstAt < (opts.throttleMs ?? 90)) return;
  __lastBurstAt = now;

  const n = opts.count ?? 10;
  const spread = opts.spread ?? 24;

  const root = document.createElement("div");
  root.className = "star-burst";
  root.style.transform = `translate(${x}px, ${y}px)`;

  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    const a = (Math.PI * 2 * i) / n + (Math.random() * 0.28);
    const r = (spread * 0.45) + Math.random() * spread;

    const dx = Math.cos(a) * r;
    const dy = Math.sin(a) * r;

    p.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    p.style.setProperty("--dy", `${dy.toFixed(1)}px`);

    const s = 0.7 + Math.random() * 0.9;
    p.style.width = `${(5.2 * s).toFixed(1)}px`;
    p.style.height = `${(5.2 * s).toFixed(1)}px`;

    const c = ["", "c1", "c2", "c3"][Math.floor(Math.random() * 4)];
    if (c) p.classList.add(c);

    p.style.animationDelay = `${(Math.random() * 90).toFixed(0)}ms`;
    root.appendChild(p);
  }

  document.body.appendChild(root);
  setTimeout(() => root.remove(), 700);
}

document.addEventListener("click", (e) => {
  const tag = (e.target?.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return;
  spawnStarBurst(e.clientX, e.clientY, { count: 10, spread: 24, throttleMs: 90 });
});
function showResult() {
  rebuildScores();

  // code = ผลลัพธ์ตัวอักษร 4 ตัว (ใช้กับข้อความ)
  const code = computePermutation(state.scores);

  // numbered = ชื่อไฟล์การ์ดแบบเลข (ใช้กับรูป) ถ้าไม่มีให้เป็น null
  const numbered = toNumberedCardCode(code);
  const imgSrc = numbered ? `${CARD_FOLDER}/${numbered}.${CARD_EXT}` : "";

  // profile
  profilePreview.innerHTML = `
    <b>${escapeHtml(state.profile.fullName)}</b><br/>
    ${escapeHtml(state.profile.orgGroup)}<br/>
    ${escapeHtml(state.profile.orgUnit)}
  `;

  // answers
  answersPreview.textContent = HIDE_AXIS_IN_SUMMARY
    ? state.answers.map((a) => `ข้อ${a.q}:${a.key}`).join(" • ")
    : state.answers.map((a) => `ข้อ${a.q}:${a.key}(${a.axis})`).join(" • ");

  // header
  resultCode.textContent = numbered || `ECMU-${code}`;
  resultSubtitle.textContent = `${code} • ${CHARACTER_MAP[code]?.name || "Character"}`;

  // text card (ข้อความยังใช้ code เดิมเสมอ)
  fillTextCard(code);

  // reset image handlers (avoid stale callbacks)
  if (resultImg) {
    resultImg.onload = null;
    resultImg.onerror = null;
  }

  // Prepare UI states (but DON'T show result panel yet)
  fileText.textContent = numbered ? imgSrc : "—";
  saveBtn.disabled = true;

  // Always ensure textCard is available on result page
  textCard.classList.remove("hidden");

  // Start processing overlay (5s)
  showResultProcessing();

  // Rotate processing sub-text during 5s (optional)
  const rpSub = document.getElementById("rpSubText");
  const msgs = ["กำลังวิเคราะห์คำตอบ…", "กำลังรวมพลัง ECMU…", "กำลังสร้างการ์ดตัวตน…"];
  let msgIdx = 0;
  let msgTimer = null;
  if (rpSub) {
    rpSub.textContent = msgs[0];
    msgTimer = setInterval(() => {
      msgIdx = (msgIdx + 1) % msgs.length;
      rpSub.textContent = msgs[msgIdx];
    }, 1400);
  }

  // Image logic (preload during processing)
  if (!numbered) {
    // no image for this code
    resultImg.classList.add("hidden");
    resultImg.removeAttribute("src");
    saveBtn.disabled = true;
  } else {
    resultImg.classList.add("hidden"); // will unhide onload
    resultImg.src = imgSrc;

    resultImg.onload = () => {
      resultImg.classList.remove("hidden");
      saveBtn.disabled = false;
    };

    resultImg.onerror = () => {
      resultImg.classList.add("hidden");
      saveBtn.disabled = true;
      fileText.textContent = "—";
    };
  }

 // End of processing: small boom near the end, then reveal result
const TOTAL = 10550;          // เวลารวมที่อยากให้ประมวลผล (ms)
const BOOM_AT = TOTAL - 650;  // ให้ boom ก่อนจบ ~0.65s

setTimeout(() => boomResultProcessing(), BOOM_AT);

setTimeout(() => {
  if (msgTimer) clearInterval(msgTimer);

  hideResultProcessing();
  showPanel("result");
  playResultReveal();
  const resultCode = getCurrentResultCode();
    const fullName = state.profile?.fullName || "ไม่ระบุชื่อ";
    const department = `${state.profile?.orgGroup || ""} - ${state.profile?.orgUnit || ""}`;
    
    sendDataToSheet(fullName, department, resultCode, 0);
}, TOTAL);
}

// ---- Share/Save ----
function buildShareText(code){
  const base = CHARACTER_MAP[code];
  const detail = CHARACTER_DETAILS[code];
  const mission = missionFromLastLetter(code);

  const who = `${state.profile.fullName} • ${state.profile.orgUnit}`;
  const strengths = (detail?.strengths || []).map(s => `- ${s}`).join("\n");

  return [
    "The Next You Card",
    who,
    `Result Code: ${code}`,
    base ? `Character: ${base.name}` : "",
    base ? `Meaning: ${base.meaning}` : "",
    "",
    "Strengths:",
    strengths,
    "",
    "Challenge:",
    detail?.challenge || "",
    "",
    "CMU Mission (คลิปแนะนำ):",
    mission,
  ].filter(Boolean).join("\n");
}

async function shareResult(code){
  const text = buildShareText(code);

  if (navigator.share) {
    try {
      await navigator.share({ title: "The Next You Card", text });
      return;
    } catch (e) {}
  }

  await navigator.clipboard.writeText(text);
  alert("คัดลอกข้อความผลลัพธ์แล้ว สามารถนำไปวางเพื่อแชร์ได้");
}

function saveImageIfPossible(){
  if(!resultImg || resultImg.classList.contains("hidden")) {
    alert("ยังไม่มีรูปการ์ดให้บันทึกตอนนี้ (ระบบแสดงเป็นการ์ดข้อความก่อน)");
    return;
  }
  window.open(resultImg.src, "_blank");
}

function buildIntroAbstractCards(){
  const field = document.getElementById("introCardField");
  if(!field) return;

  field.innerHTML = "";

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  const colors = ["168,76,255","90,230,255","255,76,210","255,200,70"];
  const N = isMobile ? 8 : 10;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for(let i=0; i<N; i++){
    const el = document.createElement("div");
    el.className = "introCard";

    const xPct = 6 + Math.random()*88;
    const yPct = 10 + Math.random()*80;

    const xPx = (xPct/100) * vw;
    const yPx = (yPct/100) * vh;

    const w = 96 + Math.random()*86;
    const r = -24 + Math.random()*48;

    const rx = isMobile ? 0 : (-10 + Math.random()*20);
    const ry = isMobile ? 0 : (-14 + Math.random()*28);

    const s = 0.82 + Math.random()*0.55;
    const glow = colors[Math.floor(Math.random()*colors.length)];

    el.style.setProperty("--x", `${xPct}%`);
    el.style.setProperty("--y", `${yPct}%`);
    el.style.setProperty("--xpx", `${xPx.toFixed(1)}`);
    el.style.setProperty("--ypx", `${yPx.toFixed(1)}`);
    el.style.setProperty("--w", `${w.toFixed(0)}px`);
    el.style.setProperty("--r", `${r.toFixed(1)}deg`);
    el.style.setProperty("--rx", `${rx.toFixed(1)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(1)}deg`);
    el.style.setProperty("--s", `${s.toFixed(3)}`);
    el.style.setProperty("--glow", glow);

    field.appendChild(el);
  }

  // ---- Google Sheets Integration ----
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzYPuQ1higV9djZlYyWVWuxr1mJJBKGXvbNW5nGQgsiacAvICdhf7AwV-IimkRkvexf/exec";

function sendDataToSheet(fullName, department, behaviorResult, score) {
  const payload = {
    fullName: fullName,          // ชื่อ - นามสกุล
    department: department,      // หน่วยงาน/สังกัด
    behaviorResult: behaviorResult, // ผลลัพธ์พฤติกรรมองค์กร ( Result Code )
    score: score || 0            // คะแนน
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  .then(() => {
    console.log("บันทึกข้อมูลเข้า Google Sheets เรียบร้อย!");
  })
  .catch((error) => {
    console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล:", error);
  });
}
}

function showIntroTapToStart(){
  const overlay = document.getElementById("introOverlay");
  const startBtn = document.getElementById("introStartBtn");
  const skipBtn  = document.getElementById("introSkipBtn");
  const audio    = document.getElementById("introAudio");

  if(!overlay){
    showPanel("consent");
      syncConsentButton();
    return;
  }

  buildIntroAbstractCards();
overlay.style.display = "";
overlay.style.pointerEvents = "auto";
overlay.classList.remove("hidden");
overlay.classList.add("introWait");
overlay.setAttribute("aria-hidden", "false");

  if(startBtn){
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.pointerEvents = "auto";
    startBtn.style.transform = "none";
  }

  const prevHtmlOverflow = document.documentElement.style.overflow;
  const prevBodyOverflow = document.body.style.overflow;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  let started = false;
  let timer = null;
let timelineTimers = [];

function clearTimeline(){
  timelineTimers.forEach(t => clearTimeout(t));
  timelineTimers = [];
}

function setScene(scene){
  overlay.classList.remove("introWait","s1","s2","s3","s3a","s3b","s4","s5","s6");
  overlay.classList.add(scene);
}
 const goConsent = () => {
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");

  overlay.style.pointerEvents = "none";
  overlay.style.display = "none";

  document.documentElement.style.overflow = prevHtmlOverflow;
  document.body.style.overflow = prevBodyOverflow;

  showPanel("consent");
  syncConsentButton();
};

  const close = () => {
  if(timer) clearTimeout(timer);
  clearTimeline();
  overlay.classList.remove("s1","s2","s3","s4","s5","s6");
  goConsent();
};


 const startIntro = async () => {
    if (started) return;
    started = true;

    // ⚡️ 1. ลบ Class .s0 ทันทีที่แตะ เพื่อซ่อนปุ่ม "แตะเพื่อเริ่ม" ในทันที
    overlay.classList.remove("s0");

    if (startBtn) {
      startBtn.disabled = true;
      startBtn.style.display = "none"; // สั่งซ่อนปุ่มทันที
    }

    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (e) {}
    }

   clearTimeline();

    const S5_MESSAGES = [
      'ทุกคนมีหน้าที่ของตัวเอง...',
      'จงพลิกการ์ดขึ้นมา',
      'เพื่อรับภารกิจและคาแรคเตอร์ประจำตัวของคุณ!'
    ];

    // ฟังก์ชันสลับข้อความพร้อมสั่งเอฟเฟกต์เลื่อมการ์ด + เงาสะท้อนกวาดผ่าน
    const changeCinematicText = (newText) => {
      const textEl = document.getElementById("cinematicText");
      const cardEl = document.querySelector(".heroUltimateCard");

      if (!textEl) return;

      // จางข้อความเดิมออก
      textEl.classList.remove("show");

      // เล่นอนิเมชันเลื่อมการ์ด
      if (cardEl) {
        cardEl.classList.remove("shimmer-slide");
        void cardEl.offsetWidth; // Trigger Reflow
        cardEl.classList.add("shimmer-slide");
      }

      // แสดงข้อความใหม่ลอยขึ้นมาอย่างนุ่มนวล
      setTimeout(() => {
        textEl.innerHTML = newText;
        textEl.classList.add("show");
      }, 300);
    };

    // 0.0s - S1: อวกาศกาแลกซีลึกลับ
    setScene("s1");

    // 1.8s - S2: โลโก้ THE NEXT YOU
    timelineTimers.push(setTimeout(() => setScene("s2"), 1800));

    // 3.5s - S3: การ์ด 4 ใบ E C M U โผล่พลิกตัว 3D สมจริงเข้ามาประจำตำแหน่ง
    timelineTimers.push(setTimeout(() => {
      setScene("s3");
      // สั่งรีเซ็ตเอฟเฟกต์ Motion Blur ตอนเปิดตัว
      document.querySelectorAll(".orbitCard").forEach(card => {
        card.style.filter = "none";
      });
    }, 3500));

    // 5.0s - S3b: เริ่มควงสว่านบีบเข้ากลางอย่างเร็ว!
    timelineTimers.push(setTimeout(() => {
      // ดึง Element ออกมาเพื่อกระตุ้น Reflow ไม่ให้ Animation ค้าง
      const swirlGroup = document.querySelector(".cardSwirlGroup");
      if (swirlGroup) void swirlGroup.offsetWidth; 

      setScene("s3b");
    }, 5000));

    // 5.8s - S4: แสงระเบิด Supernova Shockwave + การ์ดใบใหญ่พุ่งพรวดออกมาเวอร์วัง
    timelineTimers.push(setTimeout(() => {
      setScene("s4");
      if (typeof spawnStarBurst === "function") {
        spawnStarBurst(window.innerWidth / 2, window.innerHeight / 2, { count: 40, spread: 80 });
      }
    }, 5800));

    // 7.0s - S5: เริ่มเล่นข้อความบนหน้าการ์ดใหญ่พร้อมการเลื่อม
    timelineTimers.push(setTimeout(() => {
      setScene("s5");

      let msgDelay = 0;
      S5_MESSAGES.forEach((msg) => {
        // สลับข้อความ + เลื่อมการ์ดสมูท
        timelineTimers.push(setTimeout(() => {
          changeCinematicText(msg);
        }, msgDelay));

        // ค่อยๆ จางข้อความออกก่อนเปลี่ยนประโยค
        timelineTimers.push(setTimeout(() => {
          const textEl = document.getElementById("cinematicText");
          if (textEl) textEl.classList.remove("show");
        }, msgDelay + 2200));

        msgDelay += 2800;
      });

      // S6: จางฉาก準備เข้าสู่หน้าถัดไป
      timelineTimers.push(setTimeout(() => {
        setScene("s6");
      }, msgDelay + 300));

      // ส่งผู้เล่นเข้าสู่หน้า Consent
      timer = setTimeout(close, msgDelay + 1100);

    }, 7000));
  };
  startBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    startIntro();
  });

  skipBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    close();
  });

  overlay.addEventListener("click", (e) => {
    if(e.target === skipBtn) return;
    startIntro();
  });

  // IMPORTANT: debounce resize (มือถือ address bar ยุบ/ขยายทำให้ resize ถี่มาก)
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if(started) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildIntroAbstractCards, 250);
  }, { passive:true });
} // <--- ⚠️ จุดที่ 2: ปิดฟังก์ชัน showIntroTapToStart ตัวนี้ต้องอยู่ตรงนี้

// =======================
// Global Event Listeners & Init
// =======================
backToConsentBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  showPanel("consent");
  syncConsentButton();
});

startQuizBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  const v = validateProfile();
  if (!v.ok) return;

  // save profile
  state.profile = { fullName: v.fullName, orgGroup: v.group, orgUnit: v.unit };

  // reset quiz state
  idx = 0;
  state.answers = Array(questions.length).fill(null);
  rebuildScores();

  // go quiz and render first question
  showPanel("quiz");
  renderQuestion();
});

function getCurrentResultCode(){
  rebuildScores();
  return computePermutation(state.scores);
}

copyResultBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const code = getCurrentResultCode();
  const text = buildShareText(code);

  try {
    await navigator.clipboard.writeText(text);
    alert("คัดลอกผลลัพธ์แล้ว");
  } catch (err) {
    window.prompt("คัดลอกข้อความด้านล่าง:", text);
  }
});

shareBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const code = getCurrentResultCode();
  await shareResult(code);
});

saveBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  saveImageIfPossible();
});

playAgainBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  // reset quiz state
  idx = 0;
  state.scores = { E: 0, C: 0, M: 0, U: 0 };
  state.answers = Array(questions.length).fill(null);

  // reset profile inputs
  if (fullNameEl) fullNameEl.value = "";
  if (orgGroupEl) orgGroupEl.value = "";
  updateOrgUnitDropdown("");
  if (orgUnitEl) orgUnitEl.value = "";

  // เคลียร์ hint
  if (nameHint) nameHint.textContent = "";
  if (groupHint) groupHint.textContent = "";
  if (unitHint) unitHint.textContent = "";

  // reset consent
  if (consentChk) consentChk.checked = false;
  syncConsentButton();

  // กลับไปเริ่มที่ Consent
  showPanel("consent");
});

// ---- Init ----
initOrgGroupDropdown();
updateOrgUnitDropdown("");
showIntroTapToStart();