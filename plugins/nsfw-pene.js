import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // Verificar si el modo NSFW está habilitado
    if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El grupo no admite contenido *NSFW.*`);

    // Reacción actualizada
    m.react('🔥');

    // Lista de imágenes actualizadas
    let imagenes = [
        "https://telegra.ph/file/3bc6c378e9c8ab2a774d7.jpg",
        "https://telegra.ph/file/6ba27a6d50f86da6806d6.jpg",
        "https://telegra.ph/file/6b7facf7f453c7e5e0524.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2020/07/penegrandote.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2020/09/rabazo.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2013/12/tumblr_nb3ub4uldt1rlk3lwo1_540.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2021/01/cipote.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2017/02/tumblr_oie36xuW4l1tykddro1_1280-668x1188.jpg",
        "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxposter/66/f0/60/66f060db116cf153afb62a114381144b/66f060db116cf153afb62a114381144b.28.jpg",
        "https://img-cf.xnxx-cdn.com/videos/thumbs169xnxxposter/e9/13/07/e913073a75e5fc58dd0783ce421a1b45-1/e913073a75e5fc58dd0783ce421a1b45.23.jpg",
        "https://img-hw.xvideos-cdn.com/videos/thumbs169ll/cd/0a/72/cd0a72283d1f4d6038f0dcaafa689d8e/cd0a72283d1f4d6038f0dcaafa689d8e.6.jpg",
        "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/9b/e7/40/9be74068fc8c7ae266bdb2265e01d456/9be74068fc8c7ae266bdb2265e01d456.15.jpg",
        "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/93/d4/c7/93d4c7c5a8d76d1cdbfc84f2530a563a/93d4c7c5a8d76d1cdbfc84f2530a563a.25.jpg",
        "https://telegra.ph/file/9665e3bab6d1d012071a7.jpg",
        "https://telegra.ph/file/254335531a8246d07e87b.jpg",
        "https://www.temagay.org.es/wp-content/uploads/2020/01/zipotes.jpg",
        "https://pbs.twimg.com/media/Eyb1bfrWYAY2CgW.jpg"
    ];

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]; // Selección aleatoria de imagen

    // Envío de la imagen sin mensaje ni mención
    await conn.sendMessage(m.chat, { 
        image: { url: imagen }
    }, { quoted: m });
};

handler.help = ['pene'];
handler.tags = ['nsfw'];
handler.command = ['pene'];
handler.group = true;

export default handler;

