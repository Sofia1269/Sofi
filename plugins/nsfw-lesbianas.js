import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // Verificar si el modo NSFW está habilitado
    if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El grupo no admite contenido *NSFW.*`);

    // Reacción actualizada
    m.react('🔥');

    // Lista de imágenes (agregadas las URLs que proporcionaste)
    let imagenes = [
"https://pornozorras.com/wp-content/uploads/2021/11/lesbian-xxx-com-400x225.jpg",  
"https://pornozorras.com/wp-content/uploads/2021/11/lesbian-xxx-com-400x225.jpg",  
"https://www.rexporn.sex/static/naughty-teens-retreat-banana-jungle-to-have-lesbian-sex.jpg", 
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/fb/25/3cfb251209d10cba835f76e241347958-2/3cfb251209d10cba835f76e241347958.5.jpg",  
"https://media-public-ht.project1content.com/m=eyzaevFb/927/48f/7b3/0d0/4c6/393/891/534/98b/27b/dc/poster/poster_01.jpg",  
"http://uus1.com/a/cache1056/131/13195.jpg",  
"https://c1.ttcache.com/thumbnail/fXrlKrwqqLP/288x162/16.jpg",  
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxposter/73/f0/96/73f09624c976ed01efe8117b0c817c1b/73f09624c976ed01efe8117b0c817c1b.29.jpg",  
"https://fi1.ypncdn.com/202006/23/16043542/original/100(m=eKw7agaaaa).jpg",
"https://fi1.ypncdn.com/202006/23/16043542/original/100(m=eKw7agaaaa).jpg",  
"https://static-ca-cdn.eporner.com/thumbs/static4/6/64/648/6483423/10_240.jpg",  
"https://www.nakedgirls.mobi/contents/videos_screenshots/3000/3218/preview.jpg",  
"https://bs3.qvcdn.com/enhanced-2/461/41e/46141ed292fbab992ea2129f98309ead.jpg", 
"https://bs2.qvcdn.com/enhanced-2/e40/541/e40541676d37720d4b6c5616374b5aa7.jpg",  
"http://xxxonipad.net/s12/pictures/12/766_Busty_Real.jpg",  
"https://tm7.pornmovies247.com/tmb/Hee/16413176.jpg",
"https://www.fpo.xxx/contents/videos_screenshots/259000/259779/preview.jpg",
"https://www.fpo.xxx/contents/videos_screenshots/259000/259779/preview.jpg",
"https://vkusnosti.pro/uploads/posts/2022-09/1664391066_1-vkusnosti-pro-p-latina-lesbian-sex-krasivoe-porno-1.jpg",
"https://di.rdtcdn.com/m=eafT8f/media/videos/202008/20/35257621/original/8.jpg",
"https://donpornovideos.com/wp-content/uploads/2022/04/www-lesbianas-videos-gratis.jpg",
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/ec/28/e0/ec28e01ffad2882579483501e48243bf/ec28e01ffad2882579483501e48243bf.19.jpg",
"https://donpornovideos.com/wp-content/uploads/2022/05/lesbian-sex-for-lesbians.jpg" 
    ];

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]; // Selección aleatoria de imagen

    // Envío de la imagen sin mensaje ni mención
    await conn.sendMessage(m.chat, { 
        image: { url: imagen }
    }, { quoted: m });
};

handler.help = ['lesbianas'];
handler.tags = ['nsfw'];
handler.command = ['lesbianas'];
handler.group = true;

export default handler;
