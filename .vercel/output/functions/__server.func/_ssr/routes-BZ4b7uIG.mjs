import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Layers, i as Megaphone, n as Route, o as Compass, r as Orbit } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZ4b7uIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	brass: {
		bg: "bg-brass",
		border: "border-brass"
	},
	copper: {
		bg: "bg-clay",
		border: "border-clay"
	},
	silver: {
		bg: "bg-cream",
		border: "border-cream"
	},
	obsidian: {
		bg: "bg-faint",
		border: "border-faint"
	}
};
var GROUND = {
	night: "bg-ink",
	clay: "bg-clay/25",
	ash: "bg-raised",
	void: "bg-canvas",
	goldground: "bg-brass/25"
};
function Motif({ form, metal, ground, air, className }) {
	const tone = TONE[metal];
	const groundClass = GROUND[ground] ?? "bg-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden ${groundClass} ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 border border-cream/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
				form,
				tone,
				groundClass
			}),
			air === "haze" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-cream/10" }) : null,
			air === "spark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-5 right-5 h-2 w-2 rounded-full ${tone.bg}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full ${tone.bg}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1/3 left-5 h-1 w-1 rounded-full ${tone.bg}` })
			] }) : null,
			air === "rareglow" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-5 rounded-full border-2 border-brass" }) : null
		]
	});
}
function Shape({ form, tone, groundClass }) {
	if (form === "lantern") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-4/5 w-2/5 flex-col items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-1/2 ${tone.bg}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-full flex-1 rounded-full ${tone.bg}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2/3 ${tone.bg}` })
			]
		})
	});
	if (form === "arch") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-x-8 bottom-5 top-10 rounded-t-full border-8 bg-transparent ${tone.border}` });
	if (form === "seal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2/3 w-2/3 rounded-full border-8 bg-transparent ${tone.border}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute h-1/4 w-1/4 rounded-full ${tone.bg}` })]
	});
	if (form === "moon") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2/3 w-2/3 rounded-full ${tone.bg}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute h-2/3 w-2/3 translate-x-5 rounded-full ${groundClass}` })]
	});
	if (form === "ring") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 bg-transparent ${tone.border}` });
	if (form === "tablet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-x-8 top-1/4 flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-3 w-full ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-3 w-4/5 opacity-80 ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-3 w-full ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-3 w-2/3 opacity-70 ${tone.bg}` })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1/3 left-1/3 h-8 w-8 rotate-12 ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1/4 right-1/3 h-6 w-6 -rotate-6 opacity-80 ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute bottom-1/4 left-1/4 h-5 w-5 rotate-45 ${tone.bg}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute right-1/4 bottom-1/3 h-10 w-4 ${tone.bg}` })
		]
	});
}
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const area = document.createElement("textarea");
			area.value = text;
			area.setAttribute("readonly", "");
			document.body.appendChild(area);
			area.select();
			const ok = document.execCommand("copy");
			area.remove();
			return ok;
		} catch {
			return false;
		}
	}
}
function CopyButton({ text, label = "کپی" }) {
	const [state, setState] = (0, import_react.useState)("idle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "min-h-11 shrink-0 rounded-full border border-line bg-surface px-4 text-sm text-cream",
		onClick: () => {
			copyText(text).then((ok) => {
				setState(ok ? "ok" : "fail");
				window.setTimeout(() => setState("idle"), 1400);
			});
		},
		children: state === "ok" ? "کپی شد" : state === "fail" ? "نشد" : label
	});
}
function Field({ label, value, onChange, ltr }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-sm text-mute",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			dir: ltr ? "ltr" : void 0,
			autoComplete: "off",
			onChange: (event) => onChange(event.target.value),
			className: "min-h-11 w-full rounded-xl border border-line bg-raised px-3 text-cream"
		})]
	});
}
function NumberField({ label, value, min, max, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-sm text-mute",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			inputMode: "numeric",
			min,
			max,
			value: Number.isFinite(value) ? value : min,
			onChange: (event) => {
				const next = event.target.valueAsNumber;
				if (Number.isFinite(next)) onChange(next);
			},
			className: "min-h-11 w-full rounded-xl border border-line bg-raised px-3 text-cream tabular-nums"
		})]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `rounded-card border border-line bg-surface p-4 ${className}`,
		children
	});
}
var FA = "۰۱۲۳۴۵۶۷۸۹";
var RANK = {
	soft: 0,
	sharp: 1,
	blast: 2
};
var METALS = [
	"brass",
	"copper",
	"silver",
	"obsidian"
];
function faNum(value) {
	return String(value).replace(/\d/g, (d) => FA[Number(d)] ?? d);
}
function clamp(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, Math.round(n)));
}
function defaultProfile() {
	return {
		instagram: "mypage",
		telegram: "mychannel",
		xHandle: "mypage",
		appName: "هم‌قدم",
		appTagline: "ریتم آرام روز، کنار هنر خودت",
		collectionName: "شب‌چراغ",
		chain: "اتریوم",
		supply: 888,
		followers: 800,
		partnerFollowers: 1500,
		storyShare: 12,
		inviteAccept: 25
	};
}
function defaultLayers() {
	return [
		{
			id: "ground",
			title: "زمینه",
			values: [
				{
					id: "night",
					name: "شب مرکب",
					weight: 40
				},
				{
					id: "clay",
					name: "سفال",
					weight: 25
				},
				{
					id: "ash",
					name: "خاکستر",
					weight: 22
				},
				{
					id: "void",
					name: "خلاء",
					weight: 8
				},
				{
					id: "goldground",
					name: "زمینه شاه",
					weight: 5
				}
			]
		},
		{
			id: "form",
			title: "نقش",
			values: [
				{
					id: "lantern",
					name: "فانوس",
					weight: 22
				},
				{
					id: "arch",
					name: "طاق",
					weight: 18
				},
				{
					id: "seal",
					name: "مهر",
					weight: 16
				},
				{
					id: "moon",
					name: "ماه",
					weight: 16
				},
				{
					id: "ring",
					name: "حلقه",
					weight: 14
				},
				{
					id: "ember",
					name: "اخگر",
					weight: 10
				},
				{
					id: "tablet",
					name: "لوح",
					weight: 4
				}
			]
		},
		{
			id: "metal",
			title: "ماده",
			values: [
				{
					id: "brass",
					name: "برنج",
					weight: 46
				},
				{
					id: "copper",
					name: "مس",
					weight: 28
				},
				{
					id: "silver",
					name: "نقره",
					weight: 16
				},
				{
					id: "obsidian",
					name: "ابسیدین",
					weight: 10
				}
			]
		},
		{
			id: "air",
			title: "حال",
			values: [
				{
					id: "still",
					name: "ساکن",
					weight: 50
				},
				{
					id: "haze",
					name: "مه",
					weight: 28
				},
				{
					id: "spark",
					name: "جرقه",
					weight: 16
				},
				{
					id: "rareglow",
					name: "هاله کمیاب",
					weight: 6
				}
			]
		}
	];
}
function layerStamp(layers) {
	return layers.map((layer) => layer.values.map((v) => v.weight).join(",")).join("|");
}
function sign(profile, extra) {
	return [
		profile.instagram,
		profile.telegram,
		profile.xHandle,
		profile.appName,
		profile.appTagline,
		profile.collectionName,
		profile.chain,
		profile.supply,
		extra.note,
		extra.blind ? "1" : "0",
		extra.published ? "1" : "0"
	].join("");
}
function names(profile) {
	return {
		ig: profile.instagram.replace(/^@/, "").trim() || "page",
		tg: profile.telegram.replace(/^@/, "").trim() || "channel",
		x: profile.xHandle.replace(/^@/, "").trim() || "page",
		app: profile.appName.trim() || "اپ",
		tag: profile.appTagline.trim() || "ابزار شخصی",
		col: profile.collectionName.trim() || "مجموعه",
		chain: profile.chain.trim() || "اتریوم",
		supply: clamp(profile.supply, 8, 1e4)
	};
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function pick(rng, values) {
	const sum = values.reduce((s, v) => s + Math.max(1, v.weight), 0);
	let r = rng() * sum;
	for (const value of values) {
		r -= Math.max(1, value.weight);
		if (r <= 0) return value;
	}
	return values[values.length - 1];
}
function findLayer(layers, id) {
	return layers.find((layer) => layer.id === id);
}
function chance(layer, id) {
	const sum = layer.values.reduce((s, v) => s + Math.max(1, v.weight), 0);
	const weight = layer.values.find((v) => v.id === id)?.weight ?? 1;
	return Math.max(1, weight) / sum;
}
function oneInN(layers, form, metal, ground, air) {
	const g = findLayer(layers, "ground");
	const f = findLayer(layers, "form");
	const m = findLayer(layers, "metal");
	const a = findLayer(layers, "air");
	if (!g || !f || !m || !a) return 1;
	const p = chance(f, form) * chance(m, metal) * chance(g, ground) * chance(a, air);
	return Math.max(1, Math.round(1 / Math.max(p, 1e-6)));
}
function tierOf(oneIn, formId, groundId, airId) {
	if (oneIn >= 70 || airId === "rareglow" || groundId === "goldground" || formId === "tablet") return "شاخص";
	if (oneIn >= 22) return "کمیاب";
	return "همراه";
}
function asMetal(id) {
	return METALS.includes(id) ? id : "brass";
}
function rollPieces(layers, seed, profile) {
	const form = findLayer(layers, "form");
	const metal = findLayer(layers, "metal");
	const ground = findLayer(layers, "ground");
	const air = findLayer(layers, "air");
	if (!form || !metal || !ground || !air) return [];
	const n = names(profile);
	const rng = mulberry32(seed || 1);
	const seen = /* @__PURE__ */ new Set();
	const pieces = [];
	let guard = 0;
	while (pieces.length < 8 && guard < 100) {
		guard += 1;
		const f = pick(rng, form.values);
		const m = pick(rng, metal.values);
		const g = pick(rng, ground.values);
		const a = pick(rng, air.values);
		const key = `${f.id}|${m.id}|${g.id}|${a.id}`;
		if (seen.has(key)) continue;
		seen.add(key);
		const oneIn = oneInN(layers, f.id, m.id, g.id, a.id);
		const tier = tierOf(oneIn, f.id, g.id, a.id);
		const index = pieces.length + 1;
		const name = `${f.name} ${m.name}`;
		pieces.push({
			id: `piece-${index}`,
			index,
			name,
			form: f.id,
			formName: f.name,
			metal: asMetal(m.id),
			metalName: m.name,
			ground: g.id,
			groundName: g.name,
			air: a.id,
			airName: a.name,
			tier,
			oneIn,
			story: `«${name}» برای ${n.col} ساخته شده، نه کپی یک مجموعهٔ معروف. زمینه ${g.name} است و حالش ${a.name}. در عرضهٔ ${faNum(n.supply)} نسخه، این ترکیب تقریباً یکی از ${faNum(oneIn)} است. هولدرش زودتر وارد ${n.app} می‌شود؛ وعدهٔ قیمت در کار نیست.`
		});
	}
	return pieces;
}
function expectedCounts(layers, supply) {
	const total = clamp(supply, 8, 1e4);
	return layers.map((layer) => {
		const sum = layer.values.reduce((s, v) => s + Math.max(1, v.weight), 0);
		return {
			id: layer.id,
			title: layer.title,
			rows: layer.values.map((value) => ({
				...value,
				pct: Math.round(100 * Math.max(1, value.weight) / sum),
				count: Math.max(1, Math.round(total * Math.max(1, value.weight) / sum))
			}))
		};
	});
}
function rankOk(intensity, min) {
	return RANK[intensity] >= RANK[min];
}
function buildLoops(profile, intensity, prev) {
	const n = names(profile);
	return [
		{
			id: "waitlist",
			title: "فهرست انتظار اپ",
			min: "soft",
			detail: "آدم‌ها برای خود اپ می‌آیند، نه برای عدد ساختگی.",
			kpi: "تعداد ورود واقعی به لندینگ",
			steps: [
				"یک فرم ساده با اسم و راه تلگرام. بیشتر از این نپرس.",
				"رتبه را فقط با دعوت‌هایی حساب کن که واقعاً وارد شدند.",
				"هر هفته یک جمله از اپ را با اسم خود آدم‌ها منتشر کن."
			],
			asset: `${n.app} هنوز بیرون نیست.\n${n.tag}\nاگر جا می‌خواهی، در تلگرام ${n.tg} بنویس «انتظار».\nرتبه مال کسی است که دوستش واقعاً بیاید، نه کسی که شلوغ‌تر دروغ بگوید.\n@${n.ig}`
		},
		{
			id: "challenge",
			title: "چالش بازساخت",
			min: "soft",
			detail: "هوادار یکی از نقش‌ها را با وسیلهٔ دم‌دست عکس می‌گیرد.",
			kpi: "آثار واقعی منتشرشده در هایلایت",
			steps: [
				"فقط یک نقش را موضوع هفته کن، مثلاً فانوس.",
				"عکس را با اجازه در هایلایت بگذار و صاحبش را منشن کن.",
				"جایزه وایت‌لیست است، نه پول و نه وعدهٔ رشد قیمت."
			],
			asset: `چالش این هفتهٔ ${n.col}: نقش را با یک شیء واقعی بساز و برای @${n.ig} بفرست.\nبهترین‌ها، با اسم خودشان، در هایلایت می‌مانند.\nجایزه: جای وایت‌لیست. خریدوفروش با خودمان نداریم.`
		},
		{
			id: "invite",
			title: "دعوت سه‌تایی",
			min: "sharp",
			detail: "هر نفر سه کد دارد. جایزه جایگاه است، نه کمیسیون مالی.",
			kpi: "دعوت‌هایی که به یک انسان جدید رسیده‌اند",
			steps: [
				"برای هر نفر دقیقاً سه کد بساز، نه لینک بی‌انتها.",
				"کد را در استوری بگذارد و دوستش را با اجازه تگ کند.",
				"اگر کد جعلی یا حساب تکراری دیدی، همان را بسوزان."
			],
			asset: `${n.col} فقط ${faNum(n.supply)} نسخه است.\nسه دعوت مال توست. در استوری بگذار و دوستت را تگ کن.\nجایزه: جای وایت‌لیست ${n.app}، نه پول.\nاسپم دیدی، کد را خط می‌زنیم.\n@${n.ig}`
		},
		{
			id: "story",
			title: "زنجیرهٔ استوری",
			min: "sharp",
			detail: "کنجکاوی واقعی: نقش پیدا است، ماده روز بازشدن معلوم می‌شود.",
			kpi: "ریپست‌هایی که صاحب پیج را واقعاً منشن کرده‌اند",
			steps: [
				"فریم اول فقط تصویر، بدون توضیح اضافه.",
				"فریم دوم یک سؤال مشخص، نه کلیک‌بیت دروغ.",
				"فریم سوم قانون امتیاز. شمارنده را وسط کار عوض نکن."
			],
			asset: `فریم ۱ — فقط تصویر اثر.\nفریم ۲ — «مادهٔ این نقش از ${n.col} چیست؟»\nفریم ۳ — ریپست با منشن @${n.ig} یک امتیاز فهرست است.\nاگر مینت کور است، جواب را روز بازشدن بگو. زودتر لو نده.`
		},
		{
			id: "collab",
			title: "همکاری سه پیج",
			min: "sharp",
			detail: "پیشنهاد به آدم‌هایی که واقعاً می‌شناسی، نه دایرکت انبوه.",
			kpi: "جواب مثبت، نه تعداد پیام فرستاده‌شده",
			steps: [
				"حداکثر ده پیج هم‌اندازه را دست‌چین کن. مخاطبشان باید به کار بیاید.",
				"یک پیام کوتاه بفرست و اگر نه گفتند تمام.",
				"تبادل استوری دوطرفه. عدد فالوور را نخر و ردوبدل نکن."
			],
			asset: `سلام. پیج @${n.ig} را دارم و اپ «${n.app}» هنوز عمومی نشده.\nمجموعهٔ خودم، ${n.col}، را با عرضهٔ ${faNum(n.supply)} می‌سازم. کپی مجموعهٔ کسی نیست.\nاگر مخاطبت جور است، یک تبادل استوری تمیز: تو اثر من، من حرف تو.\nاگر نه، همین پیام را نادیده بگیر.`
		},
		{
			id: "quest",
			title: "ماموریت کانال",
			min: "blast",
			detail: "پنج کار واقعی داخل تلگرام، به‌جای ممبر خریده.",
			kpi: "ماموریت‌های کامل‌شده با اسم",
			steps: [
				"معرفی یک‌خطی، دلیل خواستن اپ، وصف یک نقش.",
				"آوردن یک نفر با اجازه، و یک رأی به تصمیم محصول.",
				"هر پنج تا که شد، اسمش را در فهرست وایت‌لیست بنویس."
			],
			asset: `ماموریت ${n.col} در t.me/${n.tg}\n۱ معرفی خودت در یک خط\n۲ بگو ${n.app} را برای چه می‌خواهی\n۳ یک نقش را وصف کن\n۴ یک نفر را با اجازه بیاور، نه از گروه غریبه\n۵ به یک تصمیم محصول رأی بده\nهر پنج تا = وایت‌لیست. خرید ممبر حساب نمی‌شود.`
		},
		{
			id: "war",
			title: "اتاق ۴۸ساعته",
			min: "blast",
			detail: "همهٔ کانال‌ها در یک پنجرهٔ واقعی، با آدم نه با ربات.",
			kpi: "اجرای ساعت‌ها، و گزارش آخر شب",
			steps: [
				"ساعت‌ها را از قبل بنویس و وسط کار جا‌به‌جا نکن.",
				"هر کانال یک نفر مسئول دارد، حتی اگر آن نفر خودت باشی.",
				"آخر شب عدد واقعی دعوت را بگو، حتی اگر کم بود."
			],
			asset: warLines(profile).map((line) => `${line.t} ${line.where} — ${line.what}`).join("\n")
		}
	].map((loop) => {
		const old = prev?.find((item) => item.id === loop.id);
		return {
			...loop,
			armed: old ? old.armed : rankOk(intensity, loop.min)
		};
	});
}
function warLines(profile) {
	const n = names(profile);
	return [
		{
			t: "۰۹:۰۰",
			where: "تلگرام",
			what: `پین پنجرهٔ ${n.col} و قانون سه دعوت`
		},
		{
			t: "۱۱:۰۰",
			where: "استوری",
			what: "سه فریم شمارش، بدون شمارندهٔ قلابی"
		},
		{
			t: "۱۳:۰۰",
			where: "فید",
			what: "اثر شاخص با یک خط داستان"
		},
		{
			t: "۱۶:۰۰",
			where: "تلگرام",
			what: "ماموریت دوساعته: نقش را در یک جمله وصف کن"
		},
		{
			t: "۱۸:۰۰",
			where: "ایکس",
			what: `رشتهٔ ساخت ${n.col} و وضعیت ${n.app}`
		},
		{
			t: "۲۰:۰۰",
			where: "استوری",
			what: "بازنشر عکس‌های واقعی چالش، با اجازه"
		},
		{
			t: "۲۲:۰۰",
			where: "هر سه",
			what: "گزارش شفاف: چند دعوت واقعی آمد"
		}
	];
}
function project(profile, loops, intensity) {
	const followers = clamp(profile.followers, 0, 5e6);
	const partners = clamp(profile.partnerFollowers, 0, 5e6);
	const share = clamp(profile.storyShare, 1, 40) / 100;
	const accept = clamp(profile.inviteAccept, 5, 60) / 100;
	const armed = loops.filter((loop) => loop.armed);
	const collabOn = armed.some((loop) => loop.id === "collab");
	const touch = Math.min(1.8, 1 + armed.length * .08);
	const floor = Math.round(followers * share);
	const ceil = Math.round((followers + (collabOn ? partners : 0)) * share * touch);
	const wave2 = Math.round(ceil * 3 * accept * .35);
	const waitlist = ceil + wave2;
	const mintInterest = Math.round(waitlist * .3);
	const boost = intensity === "blast" ? "اتاق ۴۸ساعته روشن است" : intensity === "sharp" ? "تمرکز روی دعوت و همکاری" : "فقط فهرست و چالش";
	return {
		floor,
		ceil,
		wave2,
		waitlist,
		mintInterest,
		armed: armed.length,
		boost
	};
}
function traitLine(piece, blind) {
	if (!piece) return "هنوز اثری چیده نشده.";
	if (blind) return `فقط نقش «${piece.formName}» پیدا است. ماده و حال روز بازشدن معلوم می‌شود.`;
	return `${piece.formName} · ${piece.metalName} · ${piece.groundName} · ${piece.airName} · رده ${piece.tier}`;
}
function buildPosts(input) {
	const n = names(input.profile);
	const hero = input.pieces[0];
	const rare = input.pieces.find((piece) => piece.tier === "شاخص") ?? input.pieces[input.pieces.length - 1];
	const noteLine = input.note.trim() ? `\nزاویهٔ این هفته: ${input.note.trim()}` : "";
	const status = input.appPublished ? "منتشر شده" : "هنوز منتشر نشده";
	const armed = input.loops.filter((loop) => loop.armed).map((loop) => loop.title);
	const armedLine = armed.length ? `\nحلقه‌های روشن: ${armed.join("، ")}.` : "";
	const hash = `#${n.col.replace(/\s+/g, "_")}`;
	return [
		{
			id: "ig-tease",
			channel: "instagram",
			day: "روز ۱",
			kind: "فید",
			title: "تیزر خاموش",
			status: "ready",
			body: `چیزی روی میز است و هنوز همه‌اش را نگفته‌ایم.\n${n.col} · ${faNum(n.supply)} نسخهٔ اصلی.\nاپ ${n.app} ${status}.\n@${n.ig}${noteLine}\n${hash}`
		},
		{
			id: "tg-pin",
			channel: "telegram",
			day: "روز ۱",
			kind: "پین",
			title: "پیام سنجاق کانال",
			status: "ready",
			body: `به کانال ${n.col} خوش آمدی.\nسه کار این‌جا جلو می‌رود:\n۱ ساخته شدن مجموعه، با لایه و کمیابیِ پیدا\n۲ اپ ${n.app} — ${n.tag} — ${status}\n۳ دعوت واقعی. اسپم و عدد جعلی این‌جا جایی ندارد.\nt.me/${n.tg}`
		},
		{
			id: "ig-story",
			channel: "instagram",
			day: "روز ۲",
			kind: "استوری",
			title: "سه فریم کنجکاوی",
			status: "ready",
			body: `فریم ۱ — فقط تصویر${hero ? ` «${hero.name}»` : ""}.\nفریم ۲ — «این نقش مال ${n.col} است. ماده چیست؟»\nفریم ۳ — استیکر سؤال و @${n.ig}\nریپست با منشن = یک امتیاز. ریپست الکی برای خودمان نمی‌سازیم.\n${traitLine(hero, input.blindMint)}`
		},
		{
			id: "x-app",
			channel: "x",
			day: "روز ۳",
			kind: "رشته",
			title: "رشتهٔ معرفی اپ",
			status: "ready",
			body: `۱/ اپ ${n.app} را هنوز عمومی نکرده‌ام.\n${n.tag}\n\n۲/ کنارش ${n.col} را می‌سازم: ${faNum(n.supply)} اثر اصلی. کپی مجموعهٔ معروف نیست.\n\n۳/ هولدر زودتر وارد اپ می‌شود. وعدهٔ قیمت نمی‌دهم.\n\n۴/ جذب با دعوت و ماموریت است. ربات نه.\n\n۵/ @${n.x}`
		},
		{
			id: "ig-piece",
			channel: "instagram",
			day: "روز ۴",
			kind: "فید",
			title: "معرفی یک اثر",
			status: "ready",
			body: hero ? `${hero.name}\n${hero.story}\n${traitLine(hero, input.blindMint)}\n${hash}` : `هنوز اثری چیده نشده. از بخش ساخت، چیدمان را بزن.`
		},
		{
			id: "tg-app",
			channel: "telegram",
			day: "روز ۵",
			kind: "پشت صحنه",
			title: "اپ چرا هنوز بیرون نیست",
			status: "ready",
			body: `${n.app} ${status} چون اول باید سه چیز راست باشد: توضیح یک‌خطی، مجموعه، و یک فهرست از آدم واقعی.\n${n.tag}\nاگر در فهرستی، روز انتشار این‌جا زودتر می‌گویم.\nقول سود نمی‌دهم. قول می‌دهم بیو را وقتی واقعاً منتشر شد عوض کنم.`
		},
		{
			id: "ig-rare",
			channel: "instagram",
			day: "روز ۷",
			kind: "فید",
			title: "اثر شاخص",
			status: "ready",
			body: rare ? `اثر شاخص این چیدمان: ${rare.name}.\nیکی از ${faNum(rare.oneIn)}، داخل عرضهٔ ${faNum(n.supply)}.\n${traitLine(rare, input.blindMint)}\nکمیابی را وزن لایه‌ها ساخته، نه یک برچسب الکی.\n${hash}` : "اثر شاخص هنوز نیست."
		},
		{
			id: "tg-quest",
			channel: "telegram",
			day: "روز ۸",
			kind: "ماموریت",
			title: "پنج کار کانال",
			status: "ready",
			body: `ماموریت برای وایت‌لیست ${n.col}:\n۱ معرفی یک‌خطی\n۲ دلیل خواستن ${n.app}\n۳ وصف یک نقش\n۴ آوردن یک نفر با اجازه\n۵ یک رأی محصول\nخرید ممبر و حساب دوم خط می‌خورد.`
		},
		{
			id: "x-art",
			channel: "x",
			day: "روز ۹",
			kind: "رشته",
			title: "رشتهٔ ساخت مجموعه",
			status: "ready",
			body: `۱/ ${n.col} چهار لایه دارد: زمینه، نقش، ماده، حال.\n\n۲/ وزن هر لایه معلوم است. برای همین می‌شود گفت هر ترکیب تقریباً یکی از چندتاست.\n\n۳/ هشت پیش‌نمایش این‌جا است. بقیهٔ ${faNum(n.supply)} با همین قانون چیده می‌شود.\n\n۴/ مقصد پیشنهادی شبکه: ${n.chain}. خودِ مینت را در مارکت‌پلیس خودت می‌زنی.\n\n۵/ @${n.x}`
		},
		{
			id: "site-land",
			channel: "site",
			day: "روز ۱۰",
			kind: "لندینگ",
			title: "متن صفحهٔ انتظار",
			status: "ready",
			body: `${n.app}\n${n.tag}\n\n${n.col}: ${faNum(n.supply)} نسخهٔ اصلی روی ${n.chain}.\nهولدر زودتر وارد اپ می‌شود.\n\nفهرست انتظار این‌جا است. دعوت سه‌تایی رتبه می‌سازد.\nعدد جعلی منتشر نمی‌کنیم.\n\nاینستاگرام @${n.ig}\nتلگرام t.me/${n.tg}`
		},
		{
			id: "ig-wait",
			channel: "instagram",
			day: "روز ۱۲",
			kind: "فید",
			title: "دعوت به فهرست",
			status: "ready",
			body: `اگر ${n.app} را می‌خواهی، قبل از انتشار بیا در فهرست.\n${n.col} جدا است و جدا هم می‌ماند: هنر، بهانهٔ دروغین برای شلوغ کردن اپ نیست.${armedLine}\n@${n.ig}\n${hash}`
		},
		{
			id: "tg-war",
			channel: "telegram",
			day: "روز ۱۴",
			kind: "اتاق جنگ",
			title: "دستور همان ۴۸ ساعت",
			status: "ready",
			body: `پنجرهٔ ${n.col} و خبر ${n.app}.\n${warLines(input.profile).map((line) => `${line.t} — ${line.where}: ${line.what}`).join("\n")}\nآخر شب عدد را همان‌طور که هست بگو.${armedLine}`
		}
	];
}
function listings(profile, appPublished) {
	const n = names(profile);
	const status = appPublished ? "منتشرشده" : "پیش از انتشار";
	return {
		listingFa: `${n.app}\n${n.tag}\n\nوضعیت: ${status}\n\nبرای کسی که پیج اینستاگرام و کانال تلگرام و یک مجموعهٔ هنری را با هم جلو می‌برد.\n\nچه می‌کند\n— ریتم روز را کوتاه و پیدا نگه می‌دارد\n— مجموعهٔ ${n.col} را کنار ابزار شخصی‌ات می‌گذارد\n— هولدر مجموعه زودتر وارد می‌شود\n\nاین متن را در استور یا صفحهٔ انتظار بگذار. آتلیه خودش اپ را در استور ثبت نمی‌کند.`,
		listingEn: `${n.app} — ${n.tag}\nStatus: ${appPublished ? "published" : "not published yet"}.\nA quiet personal app beside the original collection ${n.col} (${faNum(n.supply)} editions). Holders enter first. No price promise.`,
		bio: `${n.app} · ${appPublished ? "منتشر شد" : "هنوز منتشر نشده"}\n${n.col} · ${faNum(n.supply)} نسخهٔ اصلی\nدعوت واقعی، نه عدد جعلی\nt.me/${n.tg}`,
		privacy: `${n.app} اسم پیج و متن‌ها را روی همین دستگاه نگه می‌دارد. از این‌جا چیزی به اینستاگرام، تلگرام یا شبکه فرستاده نمی‌شود. اثرها را خودت در مارکت‌پلیس بارگذاری می‌کنی. مجموعهٔ کسی کپی نمی‌شود.`
	};
}
function buildChecks(input) {
	const n = names(input.profile);
	const armed = input.loops.filter((loop) => loop.armed).length;
	return [
		{
			id: "check-listing",
			track: "app",
			auto: true,
			done: false,
			title: "متن استور نوشته شد",
			detail: `${n.app} — ${n.tag}`
		},
		{
			id: "check-bio",
			track: "app",
			auto: true,
			done: false,
			title: "بیو آماده است",
			detail: "در نشر کپی کن و در پروفایل بگذار."
		},
		{
			id: "check-privacy",
			track: "app",
			auto: true,
			done: false,
			title: "یک پاراگراف حریم",
			detail: "کنار لندینگ بگذار، پیش از این‌که اسم کسی را بگیری."
		},
		{
			id: "check-publish-app",
			track: "app",
			auto: false,
			done: false,
			title: "خودت اپ را منتشر کن",
			detail: "آتلیه دکمهٔ استور ندارد. وقتی واقعاً رفت بالا، کلید «منتشر شد» را بزن."
		},
		{
			id: "check-preview",
			track: "art",
			auto: true,
			done: false,
			title: "هشت پیش‌نمایش چیده شد",
			detail: input.pieces.map((p) => p.name).slice(0, 3).join("، ") || "هنوز خالی است"
		},
		{
			id: "check-rarity",
			track: "art",
			auto: true,
			done: false,
			title: "جدول کمیابی از روی وزن‌ها",
			detail: `عرضهٔ هدف ${faNum(n.supply)}. شاخص را وزن کم ساخته.`
		},
		{
			id: "check-meta",
			track: "art",
			auto: true,
			done: false,
			title: "متادیتا آمادهٔ کپی است",
			detail: `شبکهٔ مقصد نوشته‌شده: ${n.chain}. تراکنش از این‌جا زده نمی‌شود.`
		},
		{
			id: "check-market",
			track: "art",
			auto: false,
			done: false,
			title: "بارگذاری در مارکت‌پلیس",
			detail: "فایل متادیتا را خودت آن‌جا بگذار. صفحهٔ مینت جعلی نساز."
		},
		{
			id: "check-loops",
			track: "growth",
			auto: true,
			done: false,
			title: "حلقه‌های جذب نوشته شد",
			detail: `${faNum(armed)} حلقه روشن است. متن هر کدام قابل کپی است.`
		},
		{
			id: "check-war",
			track: "growth",
			auto: true,
			done: false,
			title: "اتاق ۴۸ساعته زمان‌بندی شد",
			detail: "ساعت‌ها را همان روز اجرا کن، با دست خودت."
		},
		{
			id: "check-posts",
			track: "growth",
			auto: true,
			done: false,
			title: "بستهٔ اینستا، تلگرام و ایکس",
			detail: "کپی کن، منتشر کن، بعد در آتلیه علامت بزن."
		},
		{
			id: "check-live",
			track: "growth",
			auto: false,
			done: false,
			title: "فهرست را با آدم واقعی باز کن",
			detail: "اول ده نفر که می‌شناسی. نه گروه خرید ممبر، نه دایرکت انبوه."
		}
	];
}
function mergePosts(fresh, prev) {
	return fresh.map((post) => {
		const old = prev.find((item) => item.id === post.id);
		return old ? {
			...post,
			status: old.status
		} : post;
	});
}
function mergeChecks(fresh, prev) {
	return fresh.map((check) => {
		const old = prev.find((item) => item.id === check.id);
		return {
			...check,
			done: check.auto ? true : old?.done ?? false
		};
	});
}
function assemble(data, mode) {
	const loops = buildLoops(data.profile, data.intensity, mode === "keep-arms" ? data.loops : void 0);
	return {
		loops,
		posts: mergePosts(buildPosts({
			profile: data.profile,
			pieces: data.pieces,
			loops,
			blindMint: data.blindMint,
			appPublished: data.appPublished,
			note: data.note
		}), data.posts),
		checks: mergeChecks(buildChecks({
			profile: data.profile,
			pieces: data.pieces,
			loops
		}), data.checks),
		...listings(data.profile, data.appPublished),
		signature: sign(data.profile, {
			note: data.note,
			blind: data.blindMint,
			published: data.appPublished
		})
	};
}
function metadataJson(pieces, profile) {
	const n = names(profile);
	return JSON.stringify(pieces.map((piece) => ({
		name: `${n.col} #${piece.index}`,
		description: piece.story,
		attributes: [
			{
				trait_type: "نام",
				value: piece.name
			},
			{
				trait_type: "نقش",
				value: piece.formName
			},
			{
				trait_type: "ماده",
				value: piece.metalName
			},
			{
				trait_type: "زمینه",
				value: piece.groundName
			},
			{
				trait_type: "حال",
				value: piece.airName
			},
			{
				trait_type: "رده",
				value: piece.tier
			}
		]
	})), null, 2);
}
function initialStudio() {
	const profile = defaultProfile();
	const layers = defaultLayers();
	const seed = 7;
	const draft = {
		profile,
		layers,
		pieces: rollPieces(layers, seed, profile),
		seed,
		rolledStamp: layerStamp(layers),
		intensity: "blast",
		loops: [],
		posts: [],
		checks: [],
		listingFa: "",
		listingEn: "",
		bio: "",
		privacy: "",
		signature: "",
		blindMint: true,
		appPublished: false,
		note: "",
		log: ["پلن نمونه چیده شد: هشت اثر، موتور جذب انفجاری تمیز، و متن اینستا و تلگرام.", "کلاه سیاه این‌جا ابزار ندارد. نام پیج و اپ را بگذار و از دستیار بخواه دوباره بچیند."]
	};
	return {
		...draft,
		...assemble(draft, "reset-arms")
	};
}
var BLOCKED_REPLY = "این مسیر را نمی‌چینم: ربات، فالوور یا حجم جعلی، اسپم، معامله با خودت، صفحهٔ مینت قلابی، یا کپی آثار معروف. پیج را می‌بندد و مجموعه را بی‌اعتبار می‌کند. به‌جایش حالت انفجاری تمیز را مسلح کردم.";
function assistantIntent(text) {
	const t = text.trim();
	if (/ربات|فیک|جعلی|اسپم|کلاه\s*سیاه|واش|wash|فیشینگ|سیبیل|چند\s*حساب|چند\s*اکانت|پامپ|خرید\s*بازدید|خرید\s*فالو|منشن\s*بمب|کپی\s*(پانک|ایپ|بورد|کریپتو)|بامپ/i.test(t)) return "blocked";
	if (/بچین|مجموعه|اثر|لایه|کمیاب|متادیتا|nft|ان.?اف.?تی|هنر/i.test(t)) return "reroll";
	if (/انفجار|ویروس|جذب|دعوت|وایت|اتاق/i.test(t)) return "blast";
	return "compile";
}
var CHANNEL_LABEL = {
	instagram: "اینستاگرام",
	telegram: "تلگرام",
	x: "ایکس",
	site: "لندینگ"
};
var TRACK_LABEL = {
	app: "اپ",
	art: "مجموعه",
	growth: "جذب"
};
var INTENSITY_LABEL = {
	soft: "آرام",
	sharp: "تند",
	blast: "انفجاری"
};
function cleanProfile(current, patch) {
	const next = {
		...current,
		...patch
	};
	next.instagram = next.instagram.replace(/^@/, "");
	next.telegram = next.telegram.replace(/^@/, "");
	next.xHandle = next.xHandle.replace(/^@/, "");
	if (patch.supply != null) next.supply = clamp(Number(patch.supply), 8, 1e4);
	if (patch.followers != null) next.followers = clamp(Number(patch.followers), 0, 5e6);
	if (patch.partnerFollowers != null) next.partnerFollowers = clamp(Number(patch.partnerFollowers), 0, 5e6);
	if (patch.storyShare != null) next.storyShare = clamp(Number(patch.storyShare), 1, 40);
	if (patch.inviteAccept != null) next.inviteAccept = clamp(Number(patch.inviteAccept), 5, 60);
	return next;
}
var useAtelier = create()(persist((set, get) => ({
	...initialStudio(),
	setProfile: (patch) => set((state) => ({ profile: cleanProfile(state.profile, patch) })),
	setWeight: (layerId, valueId, weight) => set((state) => ({ layers: state.layers.map((layer) => layer.id !== layerId ? layer : {
		...layer,
		values: layer.values.map((value) => value.id === valueId ? {
			...value,
			weight: clamp(weight, 1, 80)
		} : value)
	}) })),
	setNote: (note) => set({ note }),
	setPublished: (appPublished) => {
		set({
			appPublished,
			...assemble({
				...get(),
				appPublished
			}, "keep-arms")
		});
	},
	setBlind: (blindMint) => {
		set({
			blindMint,
			...assemble({
				...get(),
				blindMint
			}, "keep-arms")
		});
	},
	setIntensity: (intensity) => {
		set({
			intensity,
			...assemble({
				...get(),
				intensity
			}, "reset-arms")
		});
	},
	toggleLoop: (id) => {
		const current = get();
		const loops = current.loops.map((loop) => loop.id === id ? {
			...loop,
			armed: !loop.armed
		} : loop);
		set(assemble({
			...current,
			loops
		}, "keep-arms"));
	},
	toggleCheck: (id) => set((state) => ({ checks: state.checks.map((check) => check.id === id ? {
		...check,
		done: !check.done
	} : check) })),
	setPostStatus: (id, status) => set((state) => ({ posts: state.posts.map((post) => post.id === id ? {
		...post,
		status
	} : post) })),
	setPieceStory: (id, story) => set((state) => ({ pieces: state.pieces.map((piece) => piece.id === id ? {
		...piece,
		story
	} : piece) })),
	compile: () => set(assemble(get(), "keep-arms")),
	reroll: () => {
		const current = get();
		const seed = current.seed + 1;
		const pieces = rollPieces(current.layers, seed, current.profile);
		set({
			seed,
			pieces,
			rolledStamp: layerStamp(current.layers),
			...assemble({
				...current,
				seed,
				pieces
			}, "keep-arms"),
			log: [...current.log, "هشت اثر با وزن‌های فعلی از نو چیده شد."].slice(-40)
		});
	},
	pushLog: (lines) => set((state) => ({ log: [...state.log, ...lines].slice(-40) }))
}), {
	name: "atelier-studio",
	version: 1,
	skipHydration: true,
	storage: createJSONStorage(() => localStorage),
	merge: (persisted, current) => {
		if (!persisted || typeof persisted !== "object") return current;
		const data = persisted;
		if (!data.profile || !Array.isArray(data.pieces) || !Array.isArray(data.layers)) return current;
		return {
			...current,
			...data
		};
	}
}));
var NAV = [
	{
		id: "desk",
		label: "میز",
		icon: Compass
	},
	{
		id: "make",
		label: "ساخت",
		icon: Layers
	},
	{
		id: "grow",
		label: "جذب",
		icon: Orbit
	},
	{
		id: "publish",
		label: "نشر",
		icon: Megaphone
	},
	{
		id: "guide",
		label: "دستیار",
		icon: Route
	}
];
function Studio() {
	const [view, setView] = (0, import_react.useState)("desk");
	(0, import_react.useEffect)(() => {
		useAtelier.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl leading-none text-cream",
							children: "آتلیه"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-pretty text-mute",
							children: "ساخت مجموعهٔ اصلی، جذب انفجاری تمیز، انتشار اینستا و تلگرام"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishPill, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 pt-4 pb-28 md:grid-cols-[13rem_minmax(0,1fr)] md:pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-4 flex flex-col gap-2",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							item,
							view,
							onPick: setView
						}, item.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0",
					children: [
						view === "desk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, { onPick: setView }) : null,
						view === "make" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Make, {}) : null,
						view === "grow" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grow, {}) : null,
						view === "publish" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Publish, {}) : null,
						view === "guide" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guide, {}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-10 border-t border-line bg-canvas md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-current": view === item.id ? "page" : void 0,
						onClick: () => setView(item.id),
						className: `flex min-h-14 flex-col items-center justify-center gap-1 text-xs ${view === item.id ? "text-brass" : "text-mute"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							"aria-hidden": "true",
							className: "size-5"
						}), item.label]
					}, item.id))
				})
			})
		]
	});
}
function NavButton({ item, view, onPick }) {
	const active = view === item.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-current": active ? "page" : void 0,
		onClick: () => onPick(item.id),
		className: `flex min-h-11 items-center gap-3 rounded-full px-4 text-start ${active ? "bg-brass text-ink" : "text-cream"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
			"aria-hidden": "true",
			className: "size-5"
		}), item.label]
	});
}
function PublishPill() {
	const published = useAtelier((s) => s.appPublished);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `shrink-0 rounded-full border px-3 py-2 text-sm ${published ? "border-brass text-brass" : "border-clay text-clay"}`,
		children: published ? "اپ منتشر شده" : "اپ منتشر نشده"
	});
}
function IdentityForm() {
	const profile = useAtelier((s) => s.profile);
	const setProfile = useAtelier((s) => s.setProfile);
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setLive(true), []);
	if (!live) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-mute",
		children: [
			"@",
			profile.instagram || "page",
			" · ",
			profile.appName,
			" · ",
			profile.collectionName
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				ltr: true,
				label: "پیج اینستاگرام",
				value: profile.instagram,
				onChange: (instagram) => setProfile({ instagram })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				ltr: true,
				label: "کانال تلگرام",
				value: profile.telegram,
				onChange: (telegram) => setProfile({ telegram })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				ltr: true,
				label: "ایکس",
				value: profile.xHandle,
				onChange: (xHandle) => setProfile({ xHandle })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "نام اپ",
				value: profile.appName,
				onChange: (appName) => setProfile({ appName })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "توضیح اپ",
				value: profile.appTagline,
				onChange: (appTagline) => setProfile({ appTagline })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "نام مجموعه",
				value: profile.collectionName,
				onChange: (collectionName) => setProfile({ collectionName })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "شبکهٔ مقصد",
				value: profile.chain,
				onChange: (chain) => setProfile({ chain })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
				label: "عرضه",
				value: profile.supply,
				min: 8,
				max: 1e4,
				onChange: (supply) => setProfile({ supply })
			})
		]
	});
}
function DirtyBanner() {
	const dirty = useAtelier((s) => {
		return sign(s.profile, {
			note: s.note,
			blind: s.blindMint,
			published: s.appPublished
		}) !== s.signature;
	});
	const compile = useAtelier((s) => s.compile);
	const pushLog = useAtelier((s) => s.pushLog);
	if (!dirty) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex flex-wrap items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-pretty",
			children: "نام‌ها عوض شده‌اند. متن‌ها هنوز نسخهٔ قبلی را دارند."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "min-h-11 rounded-full bg-brass px-4 text-ink",
			onClick: () => {
				compile();
				pushLog(["متن‌ها با نام‌های تازه بازنویسی شد."]);
			},
			children: "بازنویسی متن‌ها"
		})]
	});
}
function Desk({ onPick }) {
	const checks = useAtelier((s) => s.checks);
	const pieces = useAtelier((s) => s.pieces);
	const profile = useAtelier((s) => s.profile);
	const loops = useAtelier((s) => s.loops);
	const intensity = useAtelier((s) => s.intensity);
	const done = checks.filter((item) => item.done).length;
	const outlook = project(profile, loops, intensity);
	const tracks = [
		"app",
		"art",
		"growth"
	].map((track) => {
		const items = checks.filter((item) => item.track === track);
		return {
			track,
			closed: items.filter((item) => item.done).length,
			total: items.length
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirtyBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mute",
						children: TRACK_LABEL[track.track]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mark text-3xl tabular-nums",
						children: [faNum(track.closed), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-mute",
							children: ["/", faNum(track.total)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-raised",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-brass",
							style: { width: `${track.total ? 100 * track.closed / track.total : 0}%` }
						})
					})
				] }, track.track))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mute",
					children: "سقف خوش‌بینانهٔ فهرست"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mark text-4xl tabular-nums text-brass",
					children: faNum(outlook.waitlist)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-xs text-sm text-pretty text-mute",
					children: [
						"کف موج اول ",
						faNum(outlook.floor),
						" نفر. ",
						outlook.boost,
						". این تخمین است، نه وعده."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-brass px-4 text-ink",
						onClick: () => onPick("make"),
						children: "ساخت مجموعه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4",
						onClick: () => onPick("grow"),
						children: "موتور جذب"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4",
						onClick: () => onPick("guide"),
						children: "اجرای دستیار"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "پیش‌نمایش مجموعه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-mute tabular-nums",
						children: [faNum(done), " کار بسته"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 overflow-x-auto pb-2",
					children: pieces.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "w-28 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Motif, {
							form: piece.form,
							metal: piece.metal,
							ground: piece.ground,
							air: piece.air,
							className: "aspect-square rounded-2xl border border-line"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-2 truncate text-sm",
							children: piece.name
						})]
					}, piece.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "rounded-card border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "min-h-11 cursor-pointer text-cream",
					children: [
						"هویت: @",
						profile.instagram || "page",
						" · ",
						profile.appName,
						" · ",
						profile.collectionName
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityForm, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pretty text-mute",
				children: "خط قرمز: ربات، حجم جعلی و کپی آثار معروف ساخته نمی‌شود. انفجار یعنی هماهنگی آدم‌ها در ۴۸ ساعت."
			})
		]
	});
}
function Make() {
	const layers = useAtelier((s) => s.layers);
	const pieces = useAtelier((s) => s.pieces);
	const profile = useAtelier((s) => s.profile);
	const seed = useAtelier((s) => s.seed);
	const rolledStamp = useAtelier((s) => s.rolledStamp);
	const blindMint = useAtelier((s) => s.blindMint);
	const setWeight = useAtelier((s) => s.setWeight);
	const setProfile = useAtelier((s) => s.setProfile);
	const setBlind = useAtelier((s) => s.setBlind);
	const setPieceStory = useAtelier((s) => s.setPieceStory);
	const reroll = useAtelier((s) => s.reroll);
	const [selected, setSelected] = (0, import_react.useState)("piece-1");
	const piece = pieces.find((item) => item.id === selected) ?? pieces[0];
	const stale = layerStamp(layers) !== rolledStamp;
	const table = expectedCounts(layers, profile.supply);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "ساخت مجموعه"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-pretty text-mute",
				children: "چهار لایه را وزن بده، هشت پیش‌نمایش را بچین، داستان را اصلاح کن، متادیتا را خودت به مارکت‌پلیس ببر. اثرها اصلی هستند."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					label: "عرضهٔ کل",
					value: profile.supply,
					min: 8,
					max: 1e4,
					onChange: (supply) => setProfile({ supply })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "شبکهٔ مقصد",
					value: profile.chain,
					onChange: (chain) => setProfile({ chain })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-center gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: blindMint,
					onChange: (event) => setBlind(event.target.checked)
				}), "مینت کور: تا روز بازشدن فقط نقش در کپشن بیاید"]
			}),
			stale ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-brass",
				children: "وزن‌ها عوض شده‌اند. پیش‌نمایش هنوز چیدمان قبلی است."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: table.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: layer.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: layer.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-mute tabular-nums",
								children: [
									faNum(row.pct),
									"٪ · حدود ",
									faNum(row.count)
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 1,
							max: 80,
							value: row.weight,
							"aria-label": `وزن ${row.name}`,
							onChange: (event) => setWeight(layer.id, row.id, event.target.valueAsNumber)
						})] }, row.id))
					})] }, layer.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-mute tabular-nums",
							children: ["چیدمان ", faNum(seed)]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 rounded-full bg-brass px-4 text-ink",
							onClick: reroll,
							children: "بچین از نو"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: pieces.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieceCard, {
							piece: item,
							active: piece?.id === item.id,
							onPick: setSelected
						}, item.id))
					})]
				})]
			}),
			piece ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl",
						children: piece.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-mute",
						children: [
							"رده ",
							piece.tier,
							" · یکی از ",
							faNum(piece.oneIn),
							" · ",
							piece.groundName,
							" · ",
							piece.airName
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
						text: metadataJson([piece], profile),
						label: "کپی متادیتا"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-sm text-mute",
						children: "داستان اثر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: piece.story,
						rows: 4,
						onChange: (event) => setPieceStory(piece.id, event.target.value),
						className: "w-full rounded-xl border border-line bg-raised px-3 py-2 text-cream"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-mute",
					children: "داستان دستی با «بازنویسی متن‌ها» به کپشن می‌رسد. چیدمان تازه پاکش می‌کند."
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
					text: metadataJson(pieces, profile),
					label: "کپی متادیتای هر ۸ اثر"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-pretty text-mute",
				children: [
					"آتلیه تراکنش نمی‌زند. این فایل را در مارکت‌پلیس خودت، روی ",
					profile.chain || "شبکهٔ خودت",
					"، بارگذاری می‌کنی."
				]
			})
		]
	});
}
function PieceCard({ piece, active, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onPick(piece.id),
		className: `min-w-0 rounded-card border p-2 text-start ${active ? "border-brass" : "border-line"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Motif, {
				form: piece.form,
				metal: piece.metal,
				ground: piece.ground,
				air: piece.air,
				className: "aspect-square rounded-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block truncate text-sm",
				children: piece.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-mute",
				children: piece.tier
			})
		]
	});
}
function Grow() {
	const profile = useAtelier((s) => s.profile);
	const loops = useAtelier((s) => s.loops);
	const intensity = useAtelier((s) => s.intensity);
	const setProfile = useAtelier((s) => s.setProfile);
	const setIntensity = useAtelier((s) => s.setIntensity);
	const toggleLoop = useAtelier((s) => s.toggleLoop);
	const outlook = project(profile, loops, intensity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "جذب انفجاری تمیز"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-pretty text-mute",
				children: "کلاه سفیدِ تهاجمی: دعوت واقعی، کنجکاوی، همکاری و یک پنجرهٔ ۴۸ساعته. کلاه سیاه عمداً این‌جا نیست."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: Object.keys(INTENSITY_LABEL).map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": intensity === level,
					onClick: () => setIntensity(level),
					className: `min-h-11 rounded-full px-2 ${intensity === level ? "bg-brass text-ink" : "border border-line text-cream"}`,
					children: INTENSITY_LABEL[level]
				}, level))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mute",
					children: outlook.boost
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "کف موج اول",
							value: outlook.floor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "سقف فهرست",
							value: outlook.waitlist
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "علاقهٔ احتمالی مینت",
							value: outlook.mintInterest
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-pretty text-mute",
					children: [
						"هیچ‌کدام تضمین نیست. ربات این عدد را بالا نمی‌برد. حلقه‌های روشن: ",
						faNum(outlook.armed),
						"."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "فرض‌های واقعی"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "فالوور فعلی پیج",
						value: profile.followers,
						min: 0,
						max: 2e4,
						onChange: (followers) => setProfile({ followers })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "جمع فالوور پیج‌های همکار",
						value: profile.partnerFollowers,
						min: 0,
						max: 2e4,
						onChange: (partnerFollowers) => setProfile({ partnerFollowers })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "درصد استوری که واقعاً دیده و رد می‌شود",
						value: profile.storyShare,
						min: 1,
						max: 40,
						suffix: "٪",
						onChange: (storyShare) => setProfile({ storyShare })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "درصد دعوت پذیرفته",
						value: profile.inviteAccept,
						min: 5,
						max: 60,
						suffix: "٪",
						onChange: (inviteAccept) => setProfile({ inviteAccept })
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: loops.map((loop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: loop.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-pretty text-mute",
								children: loop.detail
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": loop.armed,
							onClick: () => toggleLoop(loop.id),
							className: `min-h-11 rounded-full px-4 ${loop.armed ? "bg-brass text-ink" : "border border-line"}`,
							children: loop.armed ? "روشن" : "خاموش"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 flex list-decimal flex-col gap-1 pe-4 text-sm text-pretty",
						children: loop.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-mute",
						children: ["سنجش: ", loop.kpi]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl bg-raised p-3 text-sm text-cream",
						children: loop.asset
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
							text: loop.asset,
							label: "کپی متن حلقه"
						})
					})
				] }, loop.id))
			}),
			intensity === "blast" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "اتاق ۴۸ساعته"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: warLines(profile).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-14 shrink-0 tabular-nums text-brass",
						children: line.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-mute",
						children: [line.where, " — "]
					}), line.what] })]
				}, line.t))
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mute",
				children: "اتاق ساعت‌به‌ساعت فقط در حالت انفجاری باز می‌شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "خط قرمز"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-pretty text-mute",
					children: "این‌ها ابزار ندارند. مجموعه را بی‌اعتماد می‌کنند، پیج را می‌بندند، و بعضی‌هایشان تخلف است."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ربات کامنت، بازدید استوری و فالوور جعلی" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "حجم معاملهٔ ساختگی و خریدوفروش اثر با خودت" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "دایرکت انبوه و منشن‌بمب" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "کپی مجموعهٔ معروف به اسم خودت" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "صفحهٔ مینت جعلی" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ده‌ها حساب برای جمع کردن وایت‌لیست" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 min-h-11 rounded-full bg-brass px-4 text-ink",
					onClick: () => setIntensity("blast"),
					children: "به‌جایش حالت انفجاری تمیز"
				})
			] })
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-mute",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mark text-3xl tabular-nums",
		children: faNum(value)
	})] });
}
function Slider({ label, value, min, max, suffix = "", onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-2 flex items-center justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-brass",
				children: [faNum(value), suffix]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			value: Math.min(max, Math.max(min, value)),
			onChange: (event) => onChange(event.target.valueAsNumber)
		})]
	});
}
function Publish() {
	const posts = useAtelier((s) => s.posts);
	const bio = useAtelier((s) => s.bio);
	const listingFa = useAtelier((s) => s.listingFa);
	const listingEn = useAtelier((s) => s.listingEn);
	const privacy = useAtelier((s) => s.privacy);
	const checks = useAtelier((s) => s.checks);
	const published = useAtelier((s) => s.appPublished);
	const setPublished = useAtelier((s) => s.setPublished);
	const setPostStatus = useAtelier((s) => s.setPostStatus);
	const toggleCheck = useAtelier((s) => s.toggleCheck);
	const [channel, setChannel] = (0, import_react.useState)("all");
	const visible = posts.filter((post) => channel === "all" || post.channel === channel);
	const pack = visible.map((post) => `${post.day} · ${post.kind} · ${post.title}\n${post.body}`).join("\n\n———\n\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "نشر"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-pretty text-mute",
				children: "متن‌ها آماده‌اند. انتشار واقعی را خودت در اینستاگرام، تلگرام و ایکس می‌زنی و بعد این‌جا علامت می‌گذاری."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirtyBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "وضعیت اپ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mute",
					children: "فقط وقتی واقعاً بالا آمد این را روشن کن."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": published,
					onClick: () => setPublished(!published),
					className: `min-h-11 rounded-full px-4 ${published ? "bg-brass text-ink" : "border border-clay text-clay"}`,
					children: published ? "منتشر شد" : "هنوز نه"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "بیو"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: bio })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 whitespace-pre-wrap text-sm",
				children: bio
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "rounded-card border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "min-h-11 cursor-pointer",
					children: "متن استور و حریم"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
								text: listingFa,
								label: "کپی فارسی"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "whitespace-pre-wrap text-sm",
							children: listingFa
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							dir: "ltr",
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
									text: listingEn,
									label: "Copy English"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "whitespace-pre-wrap text-sm",
								children: listingEn
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "whitespace-pre-wrap text-sm text-mute",
							children: privacy
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: "همه",
					active: channel === "all",
					onClick: () => setChannel("all")
				}), Object.keys(CHANNEL_LABEL).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: CHANNEL_LABEL[item],
					active: channel === item,
					onClick: () => setChannel(item)
				}, item))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
				text: pack,
				label: "کپی بستهٔ همین فیلتر"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: visible.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mute",
						children: [
							post.day,
							" · ",
							CHANNEL_LABEL[post.channel],
							" · ",
							post.kind
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl",
						children: post.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: post.body }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPostStatus(post.id, post.status === "posted" ? "ready" : "posted"),
							className: `min-h-11 rounded-full px-4 text-sm ${post.status === "posted" ? "bg-brass text-ink" : "border border-line"}`,
							children: post.status === "posted" ? "منتشر کردم" : "هنوز نه"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-3 whitespace-pre-wrap text-sm text-pretty",
					children: post.body
				})] }, post.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "چک‌لیست دست خودت"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-3",
				children: checks.filter((item) => !item.auto).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1 size-5",
						checked: item.done,
						onChange: () => toggleCheck(item.id)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-pretty text-mute",
						children: item.detail
					})] })]
				}) }, item.id))
			})] })
		]
	});
}
function FilterChip({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `min-h-11 shrink-0 rounded-full px-4 ${active ? "bg-brass text-ink" : "border border-line"}`,
		children: label
	});
}
function Guide() {
	const log = useAtelier((s) => s.log);
	const note = useAtelier((s) => s.note);
	const setNote = useAtelier((s) => s.setNote);
	const compile = useAtelier((s) => s.compile);
	const reroll = useAtelier((s) => s.reroll);
	const setIntensity = useAtelier((s) => s.setIntensity);
	const pushLog = useAtelier((s) => s.pushLog);
	const [command, setCommand] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [live, setLive] = (0, import_react.useState)(null);
	async function run(kind) {
		if (busy) return;
		setBusy(true);
		const steps = kind === "blocked" ? [
			BLOCKED_REPLY,
			"حالت انفجاری تمیز مسلح شد.",
			"متن کانال‌ها با همین خط بازنویسی شد."
		] : kind === "reroll" ? [
			"وزن لایه‌ها خوانده شد.",
			"هشت ترکیب بی‌تکرار چیده شد.",
			"کپشن اثرها نو شد."
		] : kind === "blast" ? [
			"شدت روی انفجاری رفت.",
			"هفت حلقه روشن شد.",
			"دستور ۴۸ساعته در تلگرام نشست."
		] : kind === "all" ? [
			"هویت پیج و اپ قفل شد.",
			"مجموعه از نو چیده شد.",
			"موتور جذب انفجاری تمیز مسلح شد.",
			"بستهٔ اینستا، تلگرام، ایکس و لندینگ نوشته شد."
		] : ["نام‌ها خوانده شد.", "بیو، استور و کپشن‌ها بازنویسی شد."];
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		setLive([]);
		for (const step of steps) {
			if (!reduce) await new Promise((resolve) => window.setTimeout(resolve, 220));
			setLive((prev) => [...prev ?? [], step]);
		}
		if (kind === "blast" || kind === "blocked" || kind === "all") setIntensity("blast");
		if (kind === "reroll" || kind === "all") reroll();
		else compile();
		pushLog(steps);
		setLive(null);
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "دستیار"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-pretty text-mute",
				children: "از صفر تا متن آماده را همین‌جا می‌چیند. پست را به اینستاگرام نمی‌فرستد و مینت را روی شبکه نمی‌زند؛ هر دو را طوری تحویل می‌دهد که خودت در یک نشست انجامشان بدهی."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirtyBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-sm text-mute",
					children: "زاویهٔ این هفته"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: note,
					onChange: (event) => setNote(event.target.value),
					placeholder: "مثلاً: پشت‌صحنهٔ ساخت فانوس",
					className: "min-h-11 w-full rounded-xl border border-line bg-raised px-3 text-cream"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						className: "min-h-11 rounded-full bg-brass px-4 text-ink disabled:opacity-50",
						onClick: () => void run("all"),
						children: "از صفر بچین"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						className: "min-h-11 rounded-full border border-line px-4 disabled:opacity-50",
						onClick: () => void run("reroll"),
						children: "مجموعهٔ تازه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						className: "min-h-11 rounded-full border border-line px-4 disabled:opacity-50",
						onClick: () => void run("blast"),
						children: "جذب انفجاری"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						className: "min-h-11 rounded-full border border-line px-4 disabled:opacity-50",
						onClick: () => void run("compile"),
						children: "فقط متن‌ها"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					const intent = assistantIntent(command);
					setCommand("");
					run(intent);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: command,
					onChange: (event) => setCommand(event.target.value),
					placeholder: "بگو چه بچیند",
					className: "min-h-11 w-full rounded-xl border border-line bg-raised px-3 text-cream"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy,
					className: "min-h-11 rounded-full bg-brass px-5 text-ink disabled:opacity-50",
					children: "اجرا"
				})]
			}),
			live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2 text-sm",
				children: live.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
			}) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "رد کار"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2 text-sm text-pretty text-mute",
				children: log.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${index}-${line.slice(0, 12)}`))
			})] })
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
