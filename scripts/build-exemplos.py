#!/usr/bin/env python3
"""Gera os sites demonstrativos em public/exemplos/<slug>/index.html.

Marcas FICTÍCIAS, usadas só para mostrar o padrão de sites da ELVANO.
Fotos: domínio público (CC0), via Openverse (StockSnap / rawpixel).
Rodar: python3 scripts/build-exemplos.py
"""
import os
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), '..', 'public', 'exemplos')
WA = 'https://wa.me/5511912022007?text='


def wa(niche):
    msg = f'Olá, Guilherme! Vi o exemplo de {niche} no site da ELVANO e quero um site assim para o meu negócio.'
    return WA + urllib.parse.quote(msg)


ICONS = {
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'msg': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    'pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'star': '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    'leaf': '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    'sparkle': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
    'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'chart': '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
    'gear': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'brief': '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    'arrow': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'tooth': '<path d="M7 3c-2.2 0-4 1.8-4 4.2 0 2 .9 3.3 1.5 5 .6 1.8.7 4.3 1.3 6.3.4 1.4 1 2.5 2 2.5 1.4 0 1.6-2.4 2-4.2.3-1.3.9-2.3 2.2-2.3s1.9 1 2.2 2.3c.4 1.8.6 4.2 2 4.2 1 0 1.6-1.1 2-2.5.6-2 .7-4.5 1.3-6.3.6-1.7 1.5-3 1.5-5C21 4.8 19.2 3 17 3c-1.9 0-3 1-5 1S8.9 3 7 3z"/>',
    'pizza': '<path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/>',
    'hand': '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
}


def ic(name, size=22):
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICONS[name]}</svg>')


BASE_CSS = '''
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--body);background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.c{max-width:1180px;margin:0 auto;padding:0 24px}
.demo{background:#141311;color:#E3C8B2;font:500 13px/1.4 system-ui,sans-serif;text-align:center;padding:9px 16px}
.demo a{color:#F4E2D2;text-decoration:underline;margin-left:6px}
header{position:sticky;top:0;z-index:40;background:var(--header-bg);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;height:72px;gap:24px}
.logo{font-family:var(--display);font-size:24px;font-weight:700;letter-spacing:-.01em;display:flex;align-items:center;gap:10px;color:var(--logo,var(--text))}
.logo .mk{width:38px;height:38px;border-radius:var(--r-sm);background:var(--accent);color:var(--on-accent);display:grid;place-items:center}
.links{display:flex;gap:28px;font-size:15px;font-weight:500;color:var(--muted)}
.links a:hover{color:var(--accent)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:var(--r-btn);font-weight:700;font-size:15px;transition:transform .15s,box-shadow .15s,background .15s;white-space:nowrap;border:2px solid transparent;cursor:pointer}
.btn:hover{transform:translateY(-1px)}
.btn-p{background:var(--accent);color:var(--on-accent);box-shadow:0 10px 30px -10px var(--accent)}
.btn-s{border-color:var(--btn2-border,var(--text));color:var(--text)}
.btn-sm{padding:10px 18px;font-size:14px}
section{padding:96px 0}
.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}
h1,h2,h3{font-family:var(--display);line-height:1.1;letter-spacing:-.02em;font-weight:var(--display-w,700)}
h1{font-size:clamp(40px,5.4vw,66px)}
h2{font-size:clamp(32px,3.8vw,46px)}
h3{font-size:21px;line-height:1.25}
.lead{font-size:clamp(17px,1.6vw,19px);color:var(--muted);max-width:560px}
.head{max-width:680px;margin-bottom:52px}
.head.center{margin-left:auto;margin-right:auto;text-align:center}
.head p{margin-top:16px;color:var(--muted);font-size:17px}
.hero{padding:72px 0 88px;position:relative;overflow:hidden}
.hero-g{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.hero h1{margin:18px 0 22px}
.ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.facts{display:flex;gap:28px;flex-wrap:wrap;margin-top:36px;padding-top:28px;border-top:1px solid var(--line);font-size:14px;color:var(--muted)}
.facts span{display:flex;align-items:center;gap:8px}
.facts svg{color:var(--accent)}
.hero-img{position:relative}
.hero-img .ph{border-radius:var(--r-lg);overflow:hidden;aspect-ratio:var(--hero-ratio,4/4.4);box-shadow:0 40px 80px -30px rgba(0,0,0,.45)}
.hero-img .ph img{width:100%;height:100%;object-fit:cover}
.float{position:absolute;background:var(--card);color:var(--text);border-radius:var(--r-md);padding:16px 20px;box-shadow:0 20px 50px -15px rgba(0,0,0,.35);display:flex;gap:14px;align-items:center;font-size:14px;border:1px solid var(--line)}
.float b{display:block;font-size:16px}
.float .fi{width:44px;height:44px;border-radius:var(--r-sm);background:var(--soft);color:var(--accent);display:grid;place-items:center;flex-shrink:0}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--r-md);padding:30px}
.card .ci{width:52px;height:52px;border-radius:var(--r-sm);background:var(--soft);color:var(--accent);display:grid;place-items:center;margin-bottom:20px}
.card p{color:var(--muted);font-size:15px;margin-top:10px}
.card .price{margin-top:16px;font-weight:700;color:var(--accent);font-size:15px}
.alt{background:var(--alt-bg)}
.list{list-style:none;margin-top:26px;display:grid;gap:14px}
.list li{display:flex;gap:12px;align-items:flex-start;font-size:16px}
.list svg{color:var(--accent);flex-shrink:0;margin-top:3px}
.img-r{border-radius:var(--r-lg);overflow:hidden;aspect-ratio:5/4}
.img-r img{width:100%;height:100%;object-fit:cover}
.gal{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:240px 240px;gap:16px}
.gal div{border-radius:var(--r-md);overflow:hidden}
.gal div:first-child{grid-row:span 2}
.gal img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.gal div:hover img{transform:scale(1.04)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;counter-reset:s}
.step{position:relative;padding:30px;border-radius:var(--r-md);background:var(--card);border:1px solid var(--line)}
.step:before{counter-increment:s;content:"0" counter(s);font-family:var(--display);font-size:42px;font-weight:700;color:var(--accent);opacity:.9;display:block;margin-bottom:12px;line-height:1}
.step p{color:var(--muted);font-size:15px;margin-top:8px}
.reviews{display:flex;gap:36px;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:40px 44px;border-radius:var(--r-lg);background:var(--card);border:1px solid var(--line)}
.stars{display:flex;gap:4px;color:#F5B301}
.stars svg{fill:#F5B301}
.faq{max-width:820px;margin:0 auto;display:grid;gap:12px}
.faq details{background:var(--card);border:1px solid var(--line);border-radius:var(--r-md);padding:20px 24px}
.faq summary{cursor:pointer;font-weight:700;font-size:17px;list-style:none;display:flex;justify-content:space-between;gap:16px}
.faq summary:after{content:"+";color:var(--accent);font-size:22px;line-height:1}
.faq details[open] summary:after{content:"–"}
.faq details p{margin-top:12px;color:var(--muted)}
.loc{display:grid;grid-template-columns:1fr 1.1fr;gap:28px}
.hours{width:100%;border-collapse:collapse;margin-top:20px;font-size:15px}
.hours td{padding:11px 0;border-bottom:1px solid var(--line)}
.hours td:last-child{text-align:right;font-weight:700}
.map{border-radius:var(--r-lg);min-height:340px;position:relative;overflow:hidden;background:
 linear-gradient(90deg,var(--map-line) 1px,transparent 1px) 0 0/44px 44px,linear-gradient(var(--map-line) 1px,transparent 1px) 0 0/44px 44px,var(--map-bg);border:1px solid var(--line)}
.map:before{content:"";position:absolute;left:-10%;top:58%;width:120%;height:16px;background:var(--map-road);transform:rotate(-8deg)}
.map:after{content:"";position:absolute;left:38%;top:-10%;width:14px;height:120%;background:var(--map-road);transform:rotate(12deg)}
.pin{position:absolute;left:50%;top:46%;transform:translate(-50%,-100%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px}
.pin .pi{width:54px;height:54px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--accent);display:grid;place-items:center;box-shadow:0 10px 25px rgba(0,0,0,.3)}
.pin .pi svg{transform:rotate(45deg);color:var(--on-accent)}
.pin span{background:var(--card);color:var(--text);padding:6px 14px;border-radius:99px;font-size:13px;font-weight:700;box-shadow:0 6px 18px rgba(0,0,0,.18)}
.cta-band{border-radius:var(--r-lg);padding:64px;text-align:center;background:var(--band-bg);color:var(--band-text);position:relative;overflow:hidden}
.cta-band p{opacity:.85;margin:16px auto 30px;max-width:560px;font-size:18px}
.cta-band .btn-p{background:var(--band-btn,var(--accent));color:var(--band-btn-text,var(--on-accent))}
footer{padding:56px 0 40px;border-top:1px solid var(--line);font-size:14px;color:var(--muted)}
.fg{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px}
.fg h4{color:var(--text);font-size:15px;margin-bottom:14px}
.fg p,.fg a{display:block;margin-bottom:8px}
.copy{margin-top:40px;padding-top:24px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px}
.wa-float{position:fixed;right:22px;bottom:22px;z-index:50;width:60px;height:60px;border-radius:50%;background:#25D366;color:#fff;display:grid;place-items:center;box-shadow:0 12px 30px rgba(37,211,102,.45)}
.tag{display:inline-block;padding:6px 14px;border-radius:99px;background:var(--soft);color:var(--accent);font-size:13px;font-weight:700}
@media(max-width:900px){
 .links{display:none}
 .hero-g,.grid2,.loc{grid-template-columns:1fr;gap:40px}
 .grid3,.steps{grid-template-columns:1fr}
 .gal{grid-template-columns:1fr 1fr;grid-template-rows:200px 160px 160px}
 .gal div:first-child{grid-column:span 2;grid-row:auto}
 section{padding:72px 0}
 .hero{padding:44px 0 64px}
 .fg{grid-template-columns:1fr}
 .cta-band{padding:44px 24px}
 .reviews{padding:30px 26px}
 .float{display:none}
 .nav .btn{padding:10px 16px;font-size:14px}
}
@media(max-width:480px){.nav .btn{padding:10px 12px}.nav .hcta{display:none}.logo{font-size:21px}}
'''


def page(s):
    """s: dict com tudo do site."""
    w = wa(s['niche'])
    fonts = s['fonts']
    nav = ''.join(f'<a href="#{a}">{t}</a>' for t, a in s['nav'])
    facts = ''.join(f'<span>{ic(i, 18)}{t}</span>' for i, t in s['facts'])
    floats = ''.join(
        f'<div class="float" style="{pos}"><div class="fi">{ic(i)}</div><div><b>{t}</b>{d}</div></div>'
        for pos, i, t, d in s['floats'])
    services = ''.join(
        f'<div class="card"><div class="ci">{ic(i)}</div><h3>{t}</h3><p>{d}</p>'
        + (f'<div class="price">{p}</div>' if p else '') + '</div>'
        for i, t, d, p in s['services'])
    about_list = ''.join(f'<li>{ic("check", 20)}<span>{t}</span></li>' for t in s['about']['list'])
    gal = ''.join(f'<div><img src="img/{g}" alt="{alt}" loading="lazy"></div>' for g, alt in s['gallery'])
    steps = ''.join(f'<div class="step"><h3>{t}</h3><p>{d}</p></div>' for t, d in s['steps'])
    faq = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in s['faq'])
    hours = ''.join(f'<tr><td>{d}</td><td>{h}</td></tr>' for d, h in s['hours'])
    stars = ic('star', 22) * 5
    extra_section = s.get('extra_section', '')
    return f'''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{s['brand']} · Exemplo demonstrativo ELVANO</title>
<meta name="description" content="Exemplo demonstrativo de site para {s['niche']} criado pela ELVANO. Marca fictícia.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://elvano-agency.com.br/exemplos/{s['slug']}/">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{fonts}&display=swap" rel="stylesheet">
<style>:root{{{s['vars']}}}{BASE_CSS}{s.get('css', '')}</style>
</head>
<body>
<div class="demo">Exemplo demonstrativo criado pela ELVANO · marca, preços e endereço fictícios · os botões abrem o WhatsApp da ELVANO<a href="{w}" target="_blank" rel="noopener">Quero um site assim</a></div>
<header><div class="c nav">
<a href="#inicio" class="logo"><span class="mk">{ic(s['logo_icon'], 20)}</span>{s['logo']}</a>
<nav class="links">{nav}</nav>
<a class="btn btn-p btn-sm" href="{w}" target="_blank" rel="noopener">{ic('msg', 18)}<span class="hcta">{s['header_cta']}</span></a>
</div></header>

<main id="inicio">
<section class="hero"><div class="c hero-g">
<div>
<span class="eyebrow">{s['eyebrow']}</span>
<h1>{s['h1']}</h1>
<p class="lead">{s['lead']}</p>
<div class="ctas"><a class="btn btn-p" href="{w}" target="_blank" rel="noopener">{ic('msg', 18)}{s['cta1']}</a><a class="btn btn-s" href="#{s['cta2_anchor']}">{s['cta2']}</a></div>
<div class="facts">{facts}</div>
</div>
<div class="hero-img"><div class="ph"><img src="img/hero.webp" alt="{s['hero_alt']}"></div>{floats}</div>
</div></section>

<section id="{s['services_id']}" class="alt"><div class="c">
<div class="head"><span class="eyebrow">{s['services_eyebrow']}</span><h2>{s['services_title']}</h2><p>{s['services_sub']}</p></div>
<div class="grid3">{services}</div>
</div></section>

{extra_section}

<section id="sobre"><div class="c grid2">
<div class="img-r"><img src="img/{s['about']['img']}" alt="{s['about']['alt']}" loading="lazy"></div>
<div><span class="eyebrow">{s['about']['eyebrow']}</span><h2 style="margin-top:14px">{s['about']['title']}</h2><p class="lead" style="margin-top:18px">{s['about']['text']}</p><ul class="list">{about_list}</ul></div>
</div></section>

<section class="alt"><div class="c">
<div class="head center"><span class="eyebrow">{s['gal_eyebrow']}</span><h2>{s['gal_title']}</h2></div>
<div class="gal">{gal}</div>
</div></section>

<section id="como"><div class="c">
<div class="head center"><span class="eyebrow">{s['steps_eyebrow']}</span><h2>{s['steps_title']}</h2></div>
<div class="steps">{steps}</div>
<div class="reviews" style="margin-top:48px">
<div><div class="stars">{stars}</div><h3 style="margin-top:12px">Avaliações reais do Google</h3><p style="color:var(--muted);margin-top:6px;max-width:520px">Neste espaço entram as avaliações verdadeiras do seu perfil no Google, para quem visita o site ver a opinião de quem já é cliente.</p></div>
<a class="btn btn-s" href="{w}" target="_blank" rel="noopener">{s['reviews_cta']}</a>
</div>
</div></section>

<section class="alt"><div class="c">
<div class="head center"><span class="eyebrow">Dúvidas frequentes</span><h2>{s['faq_title']}</h2></div>
<div class="faq">{faq}</div>
</div></section>

<section id="contato"><div class="c">
<div class="loc">
<div class="card" style="padding:40px">
<span class="eyebrow">Onde estamos</span><h2 style="margin-top:12px;font-size:36px">{s['loc_title']}</h2>
<p style="margin-top:14px;color:var(--muted);display:flex;gap:10px">{ic('pin', 20)}{s['address']}</p>
<p style="margin-top:8px;color:var(--muted);display:flex;gap:10px">{ic('phone', 20)}(11) 9xxxx-xxxx</p>
<table class="hours">{hours}</table>
<div class="ctas" style="margin-top:28px"><a class="btn btn-p" href="{w}" target="_blank" rel="noopener">{ic('msg', 18)}{s['cta1']}</a></div>
</div>
<div class="map" role="img" aria-label="Mapa ilustrativo"><div class="pin"><div class="pi">{ic('pin', 24)}</div><span>{s['logo']}</span></div></div>
</div>
<div class="cta-band" style="margin-top:72px">
<h2>{s['band_title']}</h2><p>{s['band_text']}</p>
<a class="btn btn-p" href="{w}" target="_blank" rel="noopener">{ic('msg', 18)}{s['cta1']}</a>
</div>
</div></section>
</main>

<footer><div class="c">
<div class="fg">
<div><a href="#inicio" class="logo" style="margin-bottom:14px"><span class="mk">{ic(s['logo_icon'], 20)}</span>{s['logo']}</a><p>{s['footer_text']}</p></div>
<div><h4>Navegação</h4>{''.join(f'<a href="#{a}">{t}</a>' for t, a in s['nav'])}</div>
<div><h4>Contato</h4><p>{s['address']}</p><p>(11) 9xxxx-xxxx</p><p>@{s['slug']}.exemplo</p></div>
</div>
<div class="copy"><span>© 2026 {s['brand']} · marca fictícia para demonstração</span><span>Site criado pela <a href="https://elvano-agency.com.br/" style="display:inline;color:var(--accent);font-weight:700">ELVANO</a></span></div>
</div></footer>
<a class="wa-float" href="{w}" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">{ic('msg', 28)}</a>
</body>
</html>
'''


SITES = []

# ---------------------------------------------------------------- PIZZARIA
menu_items = {
    'Tradicionais': [('Margherita', 'Molho de tomate italiano, muçarela, manjericão fresco e azeite.', 'R$ 52'),
                     ('Calabresa', 'Calabresa artesanal fatiada, cebola roxa e azeitonas pretas.', 'R$ 54'),
                     ('Portuguesa', 'Presunto, ovos, cebola, ervilha, muçarela e azeitonas.', 'R$ 58'),
                     ('Quatro queijos', 'Muçarela, provolone, gorgonzola e parmesão.', 'R$ 62')],
    'Especiais da casa': [('Da Vila', 'Linguiça artesanal, cebola caramelizada, muçarela de búfala.', 'R$ 72'),
                          ('Burrata', 'Tomate confitado, burrata inteira, pesto e rúcula.', 'R$ 79'),
                          ('Pepperoni', 'Pepperoni crocante, muçarela e mel picante.', 'R$ 68'),
                          ('Funghi', 'Mix de cogumelos, muçarela, tomilho e azeite trufado.', 'R$ 74')],
    'Doces': [('Nutella com morango', 'Creme de avelã e morangos frescos.', 'R$ 58'),
              ('Banana com canela', 'Banana, açúcar mascavo, canela e leite condensado.', 'R$ 49')],
}
menu_html = ''
for cat, items in menu_items.items():
    rows = ''.join(
        f'<div class="mi"><div><b>{n}</b><p>{d}</p></div><span>{p}</span></div>' for n, d, p in items)
    menu_html += f'<div class="mcat"><h3>{cat}</h3>{rows}</div>'

SITES.append(dict(
    slug='pizzaria', niche='pizzaria', brand='Forno da Vila Pizzaria', logo='Forno da Vila', logo_icon='pizza',
    fonts='family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;700',
    vars='--display:"Fraunces",serif;--body:"Inter",sans-serif;--bg:#17110D;--alt-bg:#1F1712;--text:#F6EBDD;--muted:#C9B8A6;'
         '--accent:#E2552F;--on-accent:#fff;--card:#241B15;--soft:rgba(226,85,47,.14);--line:rgba(246,235,221,.12);'
         '--header-bg:rgba(23,17,13,.85);--r-sm:12px;--r-md:18px;--r-lg:26px;--r-btn:999px;--btn2-border:rgba(246,235,221,.5);'
         '--map-bg:#221A14;--map-line:rgba(246,235,221,.05);--map-road:rgba(246,235,221,.09);'
         '--band-bg:linear-gradient(120deg,#E2552F,#B83A1B);--band-text:#fff;--band-btn:#17110D;--band-btn-text:#fff;--hero-ratio:4/4.3',
    css='.menu{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.mcat{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:30px}'
        '.mcat h3{color:var(--accent);margin-bottom:10px}.mi{display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-bottom:1px dashed var(--line)}'
        '.mi:last-child{border:0}.mi b{font-size:16px}.mi p{color:var(--muted);font-size:14px;margin-top:4px}.mi span{font-weight:700;color:var(--text);white-space:nowrap}'
        '@media(max-width:900px){.menu{grid-template-columns:1fr}}',
    nav=[('Cardápio', 'cardapio'), ('Delivery', 'como'), ('Sobre', 'sobre'), ('Contato', 'contato')],
    header_cta='Pedir agora',
    eyebrow='Pizzaria artesanal · Itapevi', h1='Pizza de longa fermentação, assada no forno a lenha',
    lead='Massa descansada por 48 horas, ingredientes frescos e borda crocante. Peça pelo WhatsApp e receba quentinha em casa, ou venha comer no salão.',
    cta1='Pedir pelo WhatsApp', cta2='Ver cardápio', cta2_anchor='cardapio',
    facts=[('flame', 'Forno a lenha'), ('truck', 'Delivery na região'), ('clock', 'Ter a dom, das 18h às 23h30')],
    hero_alt='Pizza saindo do forno a lenha',
    floats=[('left:-28px;bottom:42px', 'truck', 'Entrega rápida', 'Itapevi, Jandira e Barueri'),
            ('right:-18px;top:34px', 'leaf', 'Massa de 48 h', 'Leve e crocante')],
    services_id='destaques', services_eyebrow='Por que pedir aqui', services_title='Feita com calma, entregue rapidinho',
    services_sub='Do preparo da massa à embalagem que mantém a pizza quente até chegar na sua casa.',
    services=[('flame', 'Forno a lenha', 'Assamos em alta temperatura para a borda ficar leve, aerada e com aquele toque defumado.', ''),
              ('leaf', 'Ingredientes frescos', 'Tomate italiano, muçarela de qualidade e manjericão colhido no dia.', ''),
              ('truck', 'Delivery próprio', 'Entregadores da casa e embalagem térmica para a pizza chegar no ponto.', ''),
              ('pizza', 'Meio a meio', 'Monte a sua pizza com dois sabores, sem custo adicional.', ''),
              ('heart', 'Opções sem lactose', 'Muçarela sem lactose em qualquer sabor, é só pedir.', ''),
              ('users', 'Salão para família', 'Ambiente aconchegante, espaço kids e reserva para grupos.', '')],
    extra_section=f'<section id="cardapio"><div class="c"><div class="head center"><span class="eyebrow">Cardápio</span><h2>Os mais pedidos da casa</h2><p>Pizzas grandes, 8 fatias. Valores ilustrativos.</p></div><div class="menu">{menu_html}</div></div></section>',
    about=dict(img='g2.webp', alt='Pizzas artesanais na tábua com vinho', eyebrow='Nossa história',
               title='Receita de família, feita no bairro',
               text='A Forno da Vila nasceu de uma receita de família e de um forno construído no quintal. Hoje recebemos vizinhos no salão e levamos a mesma pizza até a sua casa.',
               list=['Massa preparada todos os dias', 'Molho de tomate da casa', 'Bebidas geladas e vinhos selecionados']),
    gal_eyebrow='Galeria', gal_title='Direto do nosso forno',
    gallery=[('g4.webp', 'Salão da pizzaria'), ('g1.webp', 'Pizza servida no prato'), ('g3.webp', 'Pizza na caixa de delivery'),
             ('hero.webp', 'Forno a lenha aceso'), ('g2.webp', 'Pizzas com vinho')],
    steps_eyebrow='Como pedir', steps_title='Sua pizza em 3 passos',
    steps=[('Escolha os sabores', 'Veja o cardápio e escolha uma pizza inteira ou meio a meio.'),
           ('Chame no WhatsApp', 'Mande o pedido e o endereço. A gente confirma o valor e o tempo de entrega.'),
           ('Receba quentinha', 'Embalagem térmica e entrega própria na região.')],
    reviews_cta='Ver no Google',
    faq_title='Antes de pedir',
    faq=[('Quais bairros vocês atendem?', 'Entregamos em Itapevi, Jandira e parte de Barueri. Mande o seu endereço no WhatsApp para confirmar.'),
         ('Qual o tempo médio de entrega?', 'Normalmente entre 40 e 60 minutos, dependendo do movimento e da distância.'),
         ('Quais formas de pagamento?', 'Pix, cartão de crédito e débito na entrega, e dinheiro.'),
         ('Posso reservar mesa?', 'Sim, para grupos a partir de 6 pessoas. É só chamar no WhatsApp.')],
    loc_title='Venha comer no salão', address='Rua das Oliveiras, 120 · Centro, Itapevi',
    hours=[('Terça a quinta', '18h às 23h'), ('Sexta e sábado', '18h às 23h59'), ('Domingo', '18h às 23h'), ('Segunda', 'Fechado')],
    band_title='Bateu a fome?', band_text='Chame no WhatsApp e peça a sua pizza agora mesmo.',
    footer_text='Pizzaria artesanal com forno a lenha, salão e delivery na região oeste de São Paulo.',
))

# ---------------------------------------------------------------- UNHAS
SITES.append(dict(
    slug='unhas', niche='estúdio de unhas', brand='Atelier Rosé Nails', logo='Atelier Rosé', logo_icon='sparkle',
    fonts='family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@400;500;700',
    vars='--display:"Playfair Display",serif;--display-w:600;--body:"DM Sans",sans-serif;--bg:#FFF8F6;--alt-bg:#FBEDEA;--text:#3B2230;--muted:#7D6370;'
         '--accent:#C25A76;--on-accent:#fff;--card:#FFFFFF;--soft:#FBE3E8;--line:#F0DCDF;--header-bg:rgba(255,248,246,.88);'
         '--r-sm:14px;--r-md:22px;--r-lg:32px;--r-btn:999px;--btn2-border:#3B2230;'
         '--map-bg:#FBEDEA;--map-line:rgba(59,34,48,.05);--map-road:rgba(194,90,118,.18);'
         '--band-bg:linear-gradient(135deg,#3B2230,#6A3550);--band-text:#fff;--band-btn:#F7C6D2;--band-btn-text:#3B2230;--hero-ratio:4/4.6',
    css='.hero{background:radial-gradient(700px 500px at 90% 10%,#FBE3E8,transparent 70%)}.hero h1 em{font-style:italic;color:var(--accent)}'
        '.hero-img .ph{border-radius:220px 220px 32px 32px}',
    nav=[('Serviços', 'servicos'), ('Sobre', 'sobre'), ('Como agendar', 'como'), ('Contato', 'contato')],
    header_cta='Agendar',
    eyebrow='Estúdio de unhas · Granja Viana', h1='Unhas impecáveis, <em>no seu tempo</em>',
    lead='Manicure, pedicure, gel e alongamento com materiais esterilizados e atendimento com hora marcada. Agende pelo WhatsApp em poucos minutos.',
    cta1='Agendar horário', cta2='Ver serviços', cta2_anchor='servicos',
    facts=[('shield', 'Materiais esterilizados'), ('calendar', 'Hora marcada'), ('clock', 'Seg a sáb, das 9h às 20h')],
    hero_alt='Esmaltes e acessórios de manicure',
    floats=[('left:-30px;bottom:60px', 'sparkle', 'Nail art exclusiva', 'Do minimalista ao elaborado'),
            ('right:-20px;top:50px', 'calendar', 'Agenda aberta', 'Horários ainda nesta semana')],
    services_id='servicos', services_eyebrow='Serviços', services_title='Cuidado completo para mãos e pés',
    services_sub='Valores ilustrativos. Cada serviço é feito com hora marcada, para você não esperar.',
    services=[('hand', 'Manicure tradicional', 'Cutilagem, lixamento e esmaltação com a cor que você escolher.', 'a partir de R$ 35'),
              ('heart', 'Pedicure', 'Cuidado completo dos pés com hidratação e esmaltação.', 'a partir de R$ 40'),
              ('sparkle', 'Esmaltação em gel', 'Brilho e duração de até 3 semanas, sem lascar.', 'a partir de R$ 70'),
              ('star', 'Alongamento em fibra', 'Unhas longas, naturais e resistentes, no formato que você preferir.', 'a partir de R$ 160'),
              ('smile', 'Nail art', 'Desenhos, francesinha, pedrarias e efeitos especiais.', 'a partir de R$ 10 por unha'),
              ('leaf', 'Spa dos pés', 'Esfoliação, hidratação profunda e massagem relaxante.', 'a partir de R$ 60')],
    about=dict(img='g1.webp', alt='Manicure aplicando esmalte com luvas', eyebrow='O atelier',
               title='Um espaço pensado para você relaxar',
               text='O Atelier Rosé é um estúdio acolhedor, com atendimento individual e hora marcada. Aqui você escolhe a cor, toma um café e sai com as unhas do jeito que imaginou.',
               list=['Kits de alicates individuais e esterilizados em autoclave', 'Marcas de esmalte de alta duração', 'Ambiente climatizado com Wi-Fi e café']),
    gal_eyebrow='Trabalhos', gal_title='Inspirações do nosso atelier',
    gallery=[('g4.webp', 'Unhas em tons pastel'), ('g2.webp', 'Unhas vermelhas'), ('g3.webp', 'Esmaltação colorida'),
             ('g1.webp', 'Manicure em atendimento'), ('hero.webp', 'Esmaltes e acessórios')],
    steps_eyebrow='Como agendar', steps_title='Seu horário em 3 passos',
    steps=[('Escolha o serviço', 'Veja os serviços e decida o que você quer fazer.'),
           ('Chame no WhatsApp', 'Mostramos os horários livres e você escolhe o melhor para você.'),
           ('Relaxe e aproveite', 'Chegue no horário marcado. O resto é com a gente.')],
    reviews_cta='Ver avaliações',
    faq_title='Tudo sobre o atendimento',
    faq=[('Os materiais são esterilizados?', 'Sim. Os alicates passam por limpeza e esterilização em autoclave, e as lixas são descartáveis.'),
         ('Quanto tempo dura a esmaltação em gel?', 'Em média de 2 a 3 semanas, dependendo do cuidado e do crescimento da unha.'),
         ('Preciso agendar?', 'Sim, o atendimento é com hora marcada para você não esperar.'),
         ('Quais formas de pagamento?', 'Pix, cartão de crédito e débito.')],
    loc_title='Fácil de chegar', address='Estrada da Granja, 455 · sala 3 · Granja Viana, Cotia',
    hours=[('Segunda a sexta', '9h às 20h'), ('Sábado', '9h às 17h'), ('Domingo', 'Fechado')],
    band_title='Que tal unhas novas nesta semana?', band_text='Chame no WhatsApp e escolha o seu horário.',
    footer_text='Estúdio de unhas com atendimento individual e hora marcada na Granja Viana.',
))

# ---------------------------------------------------------------- ODONTOLOGIA
team = ''.join(
    f'<div class="card" style="text-align:center"><div class="av">{i}</div><h3>{n}</h3><p>{r}</p></div>'
    for i, n, r in [('AL', 'Dra. Ana Lima', 'Clínica geral e estética · CRO fictício'),
                    ('RM', 'Dr. Rafael Moura', 'Ortodontia · CRO fictício'),
                    ('CS', 'Dra. Carla Souza', 'Implantes e prótese · CRO fictício')])
SITES.append(dict(
    slug='odontologia', niche='clínica odontológica', brand='Clínica Dental Aurora', logo='Dental Aurora', logo_icon='tooth',
    fonts='family=Plus+Jakarta+Sans:wght@400;500;600;700;800',
    vars='--display:"Plus Jakarta Sans",sans-serif;--display-w:800;--body:"Plus Jakarta Sans",sans-serif;--bg:#FFFFFF;--alt-bg:#F1F8F9;--text:#0F2F3D;--muted:#55707B;'
         '--accent:#0E8A9A;--on-accent:#fff;--card:#FFFFFF;--soft:#E2F3F5;--line:#E1ECEE;--header-bg:rgba(255,255,255,.9);'
         '--r-sm:12px;--r-md:20px;--r-lg:28px;--r-btn:14px;--btn2-border:#0F2F3D;'
         '--map-bg:#EEF6F7;--map-line:rgba(15,47,61,.05);--map-road:rgba(14,138,154,.16);'
         '--band-bg:linear-gradient(120deg,#0E8A9A,#0F2F3D);--band-text:#fff;--band-btn:#fff;--band-btn-text:#0F2F3D;--hero-ratio:4/4.2',
    css='.hero{background:linear-gradient(180deg,#F1F8F9,#fff)}.av{width:84px;height:84px;border-radius:50%;margin:0 auto 18px;background:var(--soft);color:var(--accent);display:grid;place-items:center;font-weight:800;font-size:24px}'
        '.conv{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:36px}',
    nav=[('Tratamentos', 'tratamentos'), ('Equipe', 'equipe'), ('Sobre', 'sobre'), ('Contato', 'contato')],
    header_cta='Agendar avaliação',
    eyebrow='Odontologia · Jandira', h1='Cuidado odontológico completo, perto da sua casa',
    lead='Da limpeza ao implante, com uma equipe que explica cada etapa do tratamento. Atendemos convênios e particular.',
    cta1='Agendar avaliação', cta2='Ver tratamentos', cta2_anchor='tratamentos',
    facts=[('shield', 'Convênios e particular'), ('users', 'Atendimento para toda a família'), ('clock', 'Seg a sáb')],
    hero_alt='Consultório odontológico moderno',
    floats=[('left:-30px;bottom:48px', 'calendar', 'Agenda online', 'Escolha o melhor horário'),
            ('right:-20px;top:40px', 'smile', 'Atendimento humano', 'Sem pressa, com explicação')],
    services_id='tratamentos', services_eyebrow='Tratamentos', services_title='Tudo para o seu sorriso em um só lugar',
    services_sub='Cada tratamento começa com uma avaliação para entender o que você precisa.',
    services=[('tooth', 'Clínica geral', 'Limpeza, restaurações e prevenção para manter a saúde bucal em dia.', ''),
              ('smile', 'Clareamento', 'Clareamento a laser ou caseiro supervisionado pelo dentista.', ''),
              ('target', 'Ortodontia', 'Aparelhos fixos e alinhadores transparentes para todas as idades.', ''),
              ('shield', 'Implantes', 'Reposição de dentes com planejamento digital e acompanhamento.', ''),
              ('heart', 'Odontopediatria', 'Atendimento lúdico e paciente para as crianças.', ''),
              ('sparkle', 'Lentes e facetas', 'Estética do sorriso planejada com você, etapa por etapa.', '')],
    extra_section=f'<section id="equipe"><div class="c"><div class="head center"><span class="eyebrow">Equipe</span><h2>Quem vai cuidar de você</h2><p>Nomes e registros ilustrativos para este exemplo.</p></div><div class="grid3">{team}</div>'
                  '<div class="conv">' + ''.join(f'<span class="tag">{t}</span>' for t in ['Convênios odontológicos', 'Planos empresariais', 'Particular', 'Parcelamento no cartão']) + '</div></div></section>',
    about=dict(img='g1.webp', alt='Cadeira odontológica em consultório', eyebrow='A clínica',
               title='Estrutura moderna e atendimento acolhedor',
               text='A Clínica Dental Aurora foi pensada para que você se sinta à vontade desde a recepção. Consultórios amplos, equipamentos atualizados e uma equipe que prioriza o seu conforto.',
               list=['Esterilização em autoclave e materiais descartáveis', 'Raio-X digital no consultório', 'Fácil acesso e estacionamento próximo']),
    gal_eyebrow='Estrutura', gal_title='Conheça os nossos consultórios',
    gallery=[('hero.webp', 'Consultório principal'), ('g3.webp', 'Dentistas em atendimento'), ('g2.webp', 'Equipamento odontológico'),
             ('g4.webp', 'Dentista em procedimento'), ('g1.webp', 'Cadeira odontológica')],
    steps_eyebrow='Primeira consulta', steps_title='Como funciona o seu atendimento',
    steps=[('Agende a avaliação', 'Escolha o melhor dia e horário pelo WhatsApp.'),
           ('Avaliação completa', 'O dentista examina, tira suas dúvidas e explica as opções.'),
           ('Plano de tratamento', 'Você recebe o plano por escrito, com etapas e valores, antes de começar.')],
    reviews_cta='Ver no Google',
    faq_title='Perguntas de quem vai à primeira consulta',
    faq=[('Vocês atendem convênio?', 'Sim, atendemos os principais convênios odontológicos e também particular. Confirme o seu plano pelo WhatsApp.'),
         ('A avaliação tem custo?', 'Informamos as condições da avaliação no momento do agendamento.'),
         ('Atendem crianças?', 'Sim, temos atendimento de odontopediatria para os pequenos.'),
         ('Posso parcelar o tratamento?', 'Sim, há opções de parcelamento no cartão.')],
    loc_title='Visite a clínica', address='Av. Central, 900 · sala 12 · Centro, Jandira',
    hours=[('Segunda a sexta', '8h às 19h'), ('Sábado', '8h às 13h'), ('Domingo', 'Fechado')],
    band_title='Vamos cuidar do seu sorriso?', band_text='Agende a sua avaliação pelo WhatsApp em poucos minutos.',
    footer_text='Clínica odontológica com atendimento para toda a família em Jandira.',
))

# ---------------------------------------------------------------- EMPRESA
segs = ''.join(f'<span class="tag">{t}</span>' for t in ['Comércio', 'Indústria', 'Serviços', 'Saúde', 'Tecnologia', 'Logística'])
SITES.append(dict(
    slug='empresa', niche='empresa de consultoria', brand='Vértice Consultoria Empresarial', logo='Vértice', logo_icon='chart',
    fonts='family=Sora:wght@500;600;700&family=Inter:wght@400;500;600;700',
    vars='--display:"Sora",sans-serif;--display-w:600;--body:"Inter",sans-serif;--bg:#FFFFFF;--alt-bg:#F4F6FA;--text:#0B1F3A;--muted:#55627A;'
         '--accent:#2F5BEA;--on-accent:#fff;--card:#FFFFFF;--soft:#E8EEFF;--line:#E3E8F0;--header-bg:rgba(255,255,255,.9);'
         '--r-sm:10px;--r-md:16px;--r-lg:22px;--r-btn:10px;--btn2-border:#0B1F3A;'
         '--map-bg:#EEF2F8;--map-line:rgba(11,31,58,.05);--map-road:rgba(47,91,234,.14);'
         '--band-bg:linear-gradient(120deg,#0B1F3A,#1C3D8F);--band-text:#fff;--band-btn:#fff;--band-btn-text:#0B1F3A;--hero-ratio:4/3.6',
    css='.hero{background:#0B1F3A;color:#fff}.hero .lead,.hero .facts{color:#B9C4D8}.hero .facts{border-color:rgba(255,255,255,.14)}'
        '.hero .btn-s{border-color:rgba(255,255,255,.5);color:#fff}.hero .eyebrow{color:#8EA8FF}.hero .facts svg{color:#8EA8FF}'
        '.segs{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}'
        '.form{display:grid;gap:14px;margin-top:22px}.form input,.form select,.form textarea{width:100%;padding:14px 16px;border:1px solid var(--line);border-radius:10px;font:inherit;background:#fff;color:var(--text)}'
        '.form textarea{min-height:110px;resize:vertical}',
    nav=[('Soluções', 'solucoes'), ('Como trabalhamos', 'como'), ('Sobre', 'sobre'), ('Contato', 'contato')],
    header_cta='Falar com um consultor',
    eyebrow='Consultoria empresarial · Alphaville', h1='Gestão clara para a sua empresa crescer com segurança',
    lead='Ajudamos pequenas e médias empresas a organizar finanças, processos e equipe, com um plano de ação prático e acompanhamento próximo.',
    cta1='Agendar uma conversa', cta2='Conhecer as soluções', cta2_anchor='solucoes',
    facts=[('brief', 'Pequenas e médias empresas'), ('users', 'Atendimento presencial e online'), ('pin', 'Alphaville, Barueri')],
    hero_alt='Equipe em reunião de planejamento',
    floats=[('left:-30px;bottom:40px', 'chart', 'Plano de ação', 'Metas e indicadores claros'),
            ('right:-20px;top:36px', 'calendar', 'Reuniões mensais', 'Acompanhamento contínuo')],
    services_id='solucoes', services_eyebrow='Soluções', services_title='Frentes em que podemos ajudar',
    services_sub='Cada projeto começa com um diagnóstico para entender o momento da sua empresa.',
    services=[('chart', 'Gestão financeira', 'Fluxo de caixa, precificação e relatórios para decidir com base em números.', ''),
              ('gear', 'Processos', 'Mapeamento e padronização das rotinas para a operação rodar sem depender de uma pessoa só.', ''),
              ('users', 'Pessoas e RH', 'Estrutura de cargos, contratação e rotinas de feedback para a equipe.', ''),
              ('target', 'Planejamento estratégico', 'Metas anuais, indicadores e reuniões de acompanhamento.', ''),
              ('shield', 'Governança', 'Organização societária, políticas internas e preparação para crescer.', ''),
              ('brief', 'Treinamentos', 'Capacitação de líderes e equipes, presencial ou online.', '')],
    extra_section=f'<section><div class="c grid2"><div><span class="eyebrow">Segmentos atendidos</span><h2 style="margin-top:14px">Experiência com empresas de vários setores</h2><p class="lead" style="margin-top:18px">Entendemos a rotina de cada segmento para propor soluções que cabem na realidade da empresa.</p><div class="segs">{segs}</div></div>'
                  f'<div class="img-r"><img src="img/g2.webp" alt="Prédio comercial" loading="lazy"></div></div></section>',
    about=dict(img='g1.webp', alt='Consultor apresentando para a equipe', eyebrow='Sobre a Vértice',
               title='Consultores que trabalham lado a lado com você',
               text='A Vértice nasceu para levar às pequenas e médias empresas a mesma organização das grandes, com linguagem simples e foco no que dá resultado no dia a dia.',
               list=['Diagnóstico inicial com recomendações por escrito', 'Plano de ação com responsáveis e prazos', 'Reuniões periódicas de acompanhamento']),
    gal_eyebrow='No dia a dia', gal_title='Como é trabalhar com a gente',
    gallery=[('hero.webp', 'Reunião de planejamento'), ('g3.webp', 'Análise de documentos'), ('g2.webp', 'Escritório em Alphaville'),
             ('g1.webp', 'Apresentação para a equipe'), ('g4.webp', 'Equipe em reunião')],
    steps_eyebrow='Como trabalhamos', steps_title='Do diagnóstico ao acompanhamento',
    steps=[('Diagnóstico', 'Entendemos a empresa, os números e as principais dificuldades.'),
           ('Plano de ação', 'Definimos prioridades, metas, responsáveis e prazos.'),
           ('Acompanhamento', 'Reuniões periódicas para medir avanços e ajustar a rota.')],
    reviews_cta='Ver avaliações',
    faq_title='Perguntas frequentes',
    faq=[('Para qual porte de empresa vocês trabalham?', 'Principalmente pequenas e médias empresas, de 5 a 200 colaboradores.'),
         ('O atendimento é presencial?', 'Sim, em Alphaville e região, e também online para outras cidades.'),
         ('Quanto tempo dura um projeto?', 'Depende do escopo. O diagnóstico inicial costuma levar de 2 a 4 semanas.'),
         ('Como começa?', 'Com uma conversa para entender o momento da empresa. Depois enviamos uma proposta por escrito.')],
    loc_title='Fale com a Vértice', address='Alameda Rio Verde, 300 · conj. 801 · Alphaville, Barueri',
    hours=[('Segunda a sexta', '8h30 às 18h'), ('Sábado e domingo', 'Fechado')],
    band_title='Vamos organizar a sua empresa?', band_text='Agende uma conversa sem compromisso com um dos nossos consultores.',
    footer_text='Consultoria em gestão para pequenas e médias empresas em Alphaville e região.',
))


if __name__ == '__main__':
    for s in SITES:
        d = os.path.join(ROOT, s['slug'])
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(page(s))
        print('ok', s['slug'])
