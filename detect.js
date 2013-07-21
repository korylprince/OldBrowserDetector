function sprintf() {
    var args=arguments;
    var data = args[ 0 ];
    for( var k=1; k<args.length; ++k ) { 
        data = data.replace( /%s/, args[ k ] );
    }   
    return data;
}

function getBrowser() {
    // detect browser type (n), version (v), display name (t), and language (l)
    var n,v,t,ua = navigator.userAgent;
    var names={i:'Internet Explorer',f:'Firefox',o:'Opera',s:'Apple Safari',n:'Netscape Navigator', c:"Chrome", x:"Other"};
    if (/bot|googlebot|slurp|mediapartners|adsbot|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|rekonq|symbian|webos/i.test(ua)) n="x";
    else if (/Trident.(\d+\.\d+)/i.test(ua)) n="io";
    else if (/MSIE.(\d+\.\d+)/i.test(ua)) n="i";
    else if (/Chrome.(\d+\.\d+)/i.test(ua)) n="c";
    else if (/Firefox.(\d+\.\d+)/i.test(ua)) n="f";
    else if (/Version.(\d+.\d+).{0,10}Safari/i.test(ua))    n="s";
    else if (/Safari.(\d+)/i.test(ua)) n="so";
    else if (/Opera.*Version.(\d+\.?\d+)/i.test(ua)) n="o";
    else if (/Opera.(\d+\.?\d+)/i.test(ua)) n="o";
    else if (/Netscape.(\d+)/i.test(ua)) n="n";
    else return {n:"x",v:0,t:names[n]};
    if (n=="x") return {n:"x",v:0,t:names[n]};
    v=new Number(RegExp.$1);
    if (n=="so") {
        v=((v<100) && 1.0) || ((v<130) && 1.2) || ((v<320) && 1.3) || ((v<520) && 2.0) || ((v<524) && 3.0) || ((v<526) && 3.2) ||4.0;
        n="s";
    }   
    if (n=="i" && v==7 && window.XDomainRequest) { v=8;
    }   
    if (n=="io") {
        n="i";
        if (v>5) v=10;
        else if (v>4) v=9;
        else if (v>3.1) v=8;
        else if (v>3) v=7;
        else v=9;
    }   
    var nav = window.navigator;
    var l = nav["language"]||nav["userLanguage"]||document.documentElement.getAttribute("lang")||"en";
    l = l.substring(0,2); 
    return {n:n,v:v,t:names[n]+" "+v,l:l};
}

function getTranslation(language) {
    var translation = 'Your browser (%s) is <strong>out of date</strong>. It has known <strong>security flaws</strong> and may <strong>not display all features</strong> of this and other websites. <a%s>Learn how to update your browser</a>';
    if (language=="de")
        translation = 'Sie verwenden einen <strong>veralteten Browser</strong> (%s) mit <strong>Sicherheitsschwachstellen</strong> und <strong>k&ouml;nnen nicht alle Funktionen dieser Webseite nutzen</strong>. <a%s>Hier erfahren Sie, wie einfach Sie Ihren Browser aktualisieren k&ouml;nnen</a>.';
    else if (language=="it")
        translation = 'Il tuo browser (%s) <strong>non è aggiornato</strong>. Ha delle <strong>falle di sicurezza</strong> e potrebbe <strong>non visualizzare correttamente</strong> le pagine di questo e altri siti. <a%s>Aggiorna il tuo browser</a>!';
    else if (language=="pl")
        translation = 'Przeglądarka (%s), której używasz, jest przestarzała. Posiada ona udokumentowane <strong>luki bezpieczeństwa, inne wady</strong> oraz <strong>ograniczoną funkcjonalność</strong>. Tracisz możliwość skorzystania z pełni możliwości oferowanych przez niektóre strony internetowe. <a%s>Dowiedz się jak zaktualizować swoją przeglądarkę</a>.';
    else if (language=="es")
        translation = 'Tu navegador (%s) está <strong>desactualizado</strong>. Tiene conocidas <strong>fallas de seguridad</strong> y podría <strong>no mostrar todas las características</strong> de este y otros sitios web. <a%s>Aprénde cómo puedes actualizar tu navegador</a>';
    else if (language=="nl")
        translation = 'Uw browser (%s) is <strong>oud</strong>. Het heeft bekende <strong>veiligheidsissues</strong> en kan <strong>niet alle mogelijkheden</strong> weergeven van deze of andere websites. <a%s>Lees meer over hoe uw browser te upgraden</a>';
    else if (language=="pt")
        translation = 'Seu navegador (%s) está <strong>desatualizado</strong>. Ele possui <strong>falhas de segurança</strong> e pode <strong>apresentar problemas</strong> para exibir este e outros websites. <a%s>Veja como atualizar o seu navegador</a>';
    else if (language=="sl")
        translation = 'Vaš brskalnik (%s) je <strong>zastarel</strong>. Ima več <strong>varnostnih pomankljivosti</strong> in morda <strong>ne bo pravilno prikazal</strong> te ali drugih strani. <a%s>Poglejte kako lahko posodobite svoj brskalnik</a>';
    else if (language=="ru")
        translation = 'Ваш браузер (%s) <strong>устарел</strong>. Он имеет <strong>уязвимости в безопасности</strong> и может <strong>не показывать все возможности</strong> на этом и других сайтах. <a%s>Узнайте, как обновить Ваш браузер</a>';
    else if (language=="id")
        translation = 'Browser Anda (% s) sudah <strong>kedaluarsa</strong>. Browser yang Anda pakai memiliki <strong>kelemahan keamanan</strong> dan mungkin <strong>tidak dapat menampilkan semua fitur</strong> dari situs Web ini dan lainnya. <a%s> Pelajari cara memperbarui browser Anda</a>';
    else if (language=="uk")
        translation = 'Ваш браузер (%s) <strong>застарів</strong>. Він <strong>уразливий</strong> й може <strong>не відображати всі можливості</strong> на цьому й інших сайтах. <a%s>Дізнайтесь, як оновити Ваш браузер</a>';
    else if (language=="ko")
        translation = '지금 사용하고 계신 브라우저(%s)는 <strong>오래되었습니다.</strong> 알려진 <strong>보안 취약점</strong>이 존재하며, 새로운 웹 사이트가 <strong>깨져 보일 수도</strong> 있습니다. <a%s>브라우저를 어떻게 업데이트하나요?</a>';
    else if (language=="rm")
        translation = 'Tes navigatur (%s) è <strong>antiquà</strong>. El cuntegna <strong>problems da segirezza</strong> enconuschents e mussa eventualmain <strong>betg tut las funcziuns</strong> da questa ed autras websites. <a%s>Emprenda sco actualisar tes navigatur</a>.';
    else if (language=="ja")  
        translation = 'お使いのブラウザ「%s」は、<strong>時代遅れ</strong>のバージョンです。既知の<strong>脆弱性</strong>が存在するばかりか、<strong>機能不足</strong>によって、サイトが正常に表示できない可能性があります。<a%s>ブラウザを更新する方法を確認する</a>';
    else if (language=="fr")
        translation = 'Votre navigateur (%s) est <strong>périmé</strong>. Il contient des <strong>failles de sécurité</strong> et pourrait <strong>ne pas afficher certaines fonctionalités</strong> des sites internet récents. <a%s>Découvrez comment mettre votre navigateur à jour</a>';
    else if (language=="da")
            translation = 'Din browser (%s) er <strong>forældet</strong>. Den har kendte <strong>sikkerhedshuller</strong> og kan måske <strong>ikke vise alle funktioner</strong> på dette og andre websteder. <a%s>Se hvordan du opdaterer din browser</a>';
    else if (language=="al")
            translation = 'Shfletuesi juaj (%s) është <strong>ca i vjetër</strong>. Ai ka <strong>të meta sigurie</strong> të njohura dhe mundet të <strong>mos i shfaqë të gjitha karakteristikat</strong> e kësaj dhe shumë faqeve web të tjera. <a%s>Mësoni se si të përditësoni shfletuesin tuaj</a>';
    else if (language=="ca")
            translation = 'El teu navegador (%s) està <strong>desactualitzat</strong>. Té <strong>vulnerabilitats</strong> conegudes i pot <strong>no mostrar totes les característiques</strong> d\'aquest i altres llocs web. <a%s>Aprèn a actualitzar el navegador</a>';
    else if (language=="tr")
        translation = 'Tarayıcınız (%s) <strong>güncel değildir.</strong>. Eski versiyon olduğu için <strong>güvenlik açıkları</strong> vardır ve görmek istediğiniz bu web sitesinin ve diğer web sitelerinin <strong>tüm özelliklerini hatasız bir şekilde</strong> gösteremeyecektir. <a%s>Tarayıcınızı nasıl güncelleyeceğinizi öğrenin!</a>';
    else if (language=="fa")
        translation = 'مرورگر شما (%s) <strong>از رده خارج شده</strong> می باشد. این مرورگر دارای <strong>مشکلات امنیتی شناخته شده</strong> می باشد و <strong>نمی تواند تمامی ویژگی های این</strong> وب سایت و دیگر وب سایت ها را به خوبی نمایش دهد. <a%s>در خصوص گرفتن راهنمایی درخصوص نحوه ی به روز رسانی مرورگر خود اینجا کلیک کنید.</a>';
    else if (language=="sv")
        translation = 'Din webbläsare (%s) är <strong>föråldrad</strong>. Den har kända <strong>säkerhetshål</strong> och <strong>kan inte visa alla funktioner korrekt</strong> på denna och på andra webbsidor. <a%s>Uppdatera din webbläsare idag</a>';
    return translation;
}

function browserAlert(translation) {
    var e = document.createElement("div"); 
    e.setAttribute("id", "detectAlert"); 
    e.innerHTML = '<div>'+translation+'</div>';
    document.body.appendChild(e);
    var style = "" +
"#detectAlert {" +
    "position: absolute;" +
    "z-index: 999;" +
    "width: 100%;" +
    "top: 0px;" +
    "left: 0px;" +
    "border-bottom: 3px solid #02a;" +
    "background-color: #04c;" +
    "color: #fff;" +
    "font-size: 18px;" +
"}" +
"#detectAlert div {" +
    "margin: 5px;" +
"}"+
"#detectAlert strong {" +
    "color: #fca;" +
    "font-weight: bold;" +
"}"+
"#detectAlert a {" +
    "color: #fca;" +
    "font-weight: bold;" +
    "font-size: 20px;" +
"}";
    head = document.getElementsByTagName('head')[0];
    var f = document.createElement("style");
    f.type = 'text/css';
    if (f.styleSheet){
        f.styleSheet.cssText = style;
    } else {
        f.appendChild(document.createTextNode(style));
    }
    head.appendChild(f);
}

function detectOldBrowser(options) {
    var defaults = {
        versions: {i:7,f:4,c:15,o:10.6,s:4,n:10},
        url: 'http://browser-update.org/%s/update.html'
    };
    if (typeof options === 'undefined') {
        options = defaults;
    }
    else {
        if (typeof options['versions'] === 'undefined') {
            options['versions'] = defaults['versions'];
        }
    }
    var browser = getBrowser();
    if (options['debug'] || browser['v'] <= (options['versions'][browser['n']] || defaults['versions'][browser['n']] )) {
        language = options['language'] || browser['l'];
        url = sprintf(options['url']||defaults['url'],language);
        translation = sprintf(getTranslation(language),browser['t'],' href="'+url+'"');
        browserAlert(translation);
    }

}

//setup on page load
var $win = window.onload;
window.onload=function(){ 
    try {if ($win) $win();}catch (e) {}
    detectOldBrowser(this.detectOptions);
}
