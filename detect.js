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
    var translation = 'Your browser (%s) is <b>out of date</b>. It has known <b>security flaws</b> and may <b>not display all features</b> of this and other websites. <a%s>Learn how to update your browser</a>';
    if (language=="de")
        translation = 'Sie verwenden einen <b>veralteten Browser</b> (%s) mit <b>Sicherheitsschwachstellen</b> und <b>k&ouml;nnen nicht alle Funktionen dieser Webseite nutzen</b>. <a%s>Hier erfahren Sie, wie einfach Sie Ihren Browser aktualisieren k&ouml;nnen</a>.';
    else if (language=="it")
        translation = 'Il tuo browser (%s) <b>non è aggiornato</b>. Ha delle <b>falle di sicurezza</b> e potrebbe <b>non visualizzare correttamente</b> le pagine di questo e altri siti. <a%s>Aggiorna il tuo browser</a>!';
    else if (language=="pl")
        translation = 'Przeglądarka (%s), której używasz, jest przestarzała. Posiada ona udokumentowane <b>luki bezpieczeństwa, inne wady</b> oraz <b>ograniczoną funkcjonalność</b>. Tracisz możliwość skorzystania z pełni możliwości oferowanych przez niektóre strony internetowe. <a%s>Dowiedz się jak zaktualizować swoją przeglądarkę</a>.';
    else if (language=="es")
        translation = 'Tu navegador (%s) está <b>desactualizado</b>. Tiene conocidas <b>fallas de seguridad</b> y podría <b>no mostrar todas las características</b> de este y otros sitios web. <a%s>Aprénde cómo puedes actualizar tu navegador</a>';
    else if (language=="nl")
        translation = 'Uw browser (%s) is <b>oud</b>. Het heeft bekende <b>veiligheidsissues</b> en kan <b>niet alle mogelijkheden</b> weergeven van deze of andere websites. <a%s>Lees meer over hoe uw browser te upgraden</a>';
    else if (language=="pt")
        translation = 'Seu navegador (%s) está <b>desatualizado</b>. Ele possui <b>falhas de segurança</b> e pode <b>apresentar problemas</b> para exibir este e outros websites. <a%s>Veja como atualizar o seu navegador</a>';
    else if (language=="sl")
        translation = 'Vaš brskalnik (%s) je <b>zastarel</b>. Ima več <b>varnostnih pomankljivosti</b> in morda <b>ne bo pravilno prikazal</b> te ali drugih strani. <a%s>Poglejte kako lahko posodobite svoj brskalnik</a>';
    else if (language=="ru")
        translation = 'Ваш браузер (%s) <b>устарел</b>. Он имеет <b>уязвимости в безопасности</b> и может <b>не показывать все возможности</b> на этом и других сайтах. <a%s>Узнайте, как обновить Ваш браузер</a>';
    else if (language=="id")
        translation = 'Browser Anda (% s) sudah <b>kedaluarsa</b>. Browser yang Anda pakai memiliki <b>kelemahan keamanan</b> dan mungkin <b>tidak dapat menampilkan semua fitur</b> dari situs Web ini dan lainnya. <a%s> Pelajari cara memperbarui browser Anda</a>';
    else if (language=="uk")
        translation = 'Ваш браузер (%s) <b>застарів</b>. Він <b>уразливий</b> й може <b>не відображати всі можливості</b> на цьому й інших сайтах. <a%s>Дізнайтесь, як оновити Ваш браузер</a>';
    else if (language=="ko")
        translation = '지금 사용하고 계신 브라우저(%s)는 <b>오래되었습니다.</b> 알려진 <b>보안 취약점</b>이 존재하며, 새로운 웹 사이트가 <b>깨져 보일 수도</b> 있습니다. <a%s>브라우저를 어떻게 업데이트하나요?</a>';
    else if (language=="rm")
        translation = 'Tes navigatur (%s) è <b>antiquà</b>. El cuntegna <b>problems da segirezza</b> enconuschents e mussa eventualmain <b>betg tut las funcziuns</b> da questa ed autras websites. <a%s>Emprenda sco actualisar tes navigatur</a>.';
    else if (language=="ja")  
        translation = 'お使いのブラウザ「%s」は、<b>時代遅れ</b>のバージョンです。既知の<b>脆弱性</b>が存在するばかりか、<b>機能不足</b>によって、サイトが正常に表示できない可能性があります。<a%s>ブラウザを更新する方法を確認する</a>';
    else if (language=="fr")
        translation = 'Votre navigateur (%s) est <b>périmé</b>. Il contient des <b>failles de sécurité</b> et pourrait <b>ne pas afficher certaines fonctionalités</b> des sites internet récents. <a%s>Découvrez comment mettre votre navigateur à jour</a>';
    else if (language=="da")
            translation = 'Din browser (%s) er <b>forældet</b>. Den har kendte <b>sikkerhedshuller</b> og kan måske <b>ikke vise alle funktioner</b> på dette og andre websteder. <a%s>Se hvordan du opdaterer din browser</a>';
    else if (language=="al")
            translation = 'Shfletuesi juaj (%s) është <b>ca i vjetër</b>. Ai ka <b>të meta sigurie</b> të njohura dhe mundet të <b>mos i shfaqë të gjitha karakteristikat</b> e kësaj dhe shumë faqeve web të tjera. <a%s>Mësoni se si të përditësoni shfletuesin tuaj</a>';
    else if (language=="ca")
            translation = 'El teu navegador (%s) està <b>desactualitzat</b>. Té <b>vulnerabilitats</b> conegudes i pot <b>no mostrar totes les característiques</b> d\'aquest i altres llocs web. <a%s>Aprèn a actualitzar el navegador</a>';
    else if (language=="tr")
        translation = 'Tarayıcınız (%s) <b>güncel değildir.</b>. Eski versiyon olduğu için <b>güvenlik açıkları</b> vardır ve görmek istediğiniz bu web sitesinin ve diğer web sitelerinin <b>tüm özelliklerini hatasız bir şekilde</b> gösteremeyecektir. <a%s>Tarayıcınızı nasıl güncelleyeceğinizi öğrenin!</a>';
    else if (language=="fa")
        translation = 'مرورگر شما (%s) <b>از رده خارج شده</b> می باشد. این مرورگر دارای <b>مشکلات امنیتی شناخته شده</b> می باشد و <b>نمی تواند تمامی ویژگی های این</b> وب سایت و دیگر وب سایت ها را به خوبی نمایش دهد. <a%s>در خصوص گرفتن راهنمایی درخصوص نحوه ی به روز رسانی مرورگر خود اینجا کلیک کنید.</a>';
    else if (language=="sv")
        translation = 'Din webbläsare (%s) är <b>föråldrad</b>. Den har kända <b>säkerhetshål</b> och <b>kan inte visa alla funktioner korrekt</b> på denna och på andra webbsidor. <a%s>Uppdatera din webbläsare idag</a>';
    return translation;
}

function browserAlert(translation) {
    var e = document.createElement("div"); 
    e.setAttribute("style", "position: absolute; width:100%; top:0px; left:0px; padding:5px 36px 5px 40px; border-bottom: 1px solid #000; background-color: #e50; font-size: 12px;"); 
    e.innerHTML = translation;
    document.body.appendChild(e);
}

function detectOldBrowser(options,debug) {
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
    if (debug || browser['v'] <= (options['versions'][browser['n']] || defaults['versions'][browser['n']] )) {
        language = options['language'] || browser['l'];
        url = sprintf(options['url']||defaults['url'],browser['l']);
        translation = sprintf(getTranslation(language),browser['t'],' href="'+url+'"');
        browserAlert(translation);
    }

}
