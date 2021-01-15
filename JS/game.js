var game = new Phaser.Game(1024, 768, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.stage.backgroundColor = '#85b5e1';
    game.load.baseURL = 'assets/';
    game.load.crossOrigin = 'anonymous';

    //Sfondi
    //Città
    game.load.image('bg', 'sprites/sfondi/citta/background.png');
    game.load.image('fg', 'sprites/sfondi/citta/parallasse.png');
    game.load.image('fg_2', 'sprites/sfondi/citta/parallasse_2.png');
    game.load.image('int_1', 'sprites/sfondi/citta/int.png');
    game.load.image('int_2', 'sprites/sfondi/citta/int_2.png');
    game.load.image('carrucola', 'sprites/sfondi/citta/carrucola.png');
    game.load.image('rocce', 'sprites/sfondi/citta/rocce.png');
    game.load.image('est', 'sprites/sfondi/citta/est.png');
    game.load.image('monte', 'sprites/sfondi/citta/monte.png');
    game.load.image('cartello', 'sprites/sfondi/citta/cartello.png');

    //Grotta
    game.load.image('paral_1_g', 'sprites/sfondi/grotta/paral_1_g.png');
    game.load.image('paral_2_g', 'sprites/sfondi/grotta/paral_2_g.png');
    game.load.image('paral_soff_g', 'sprites/sfondi/grotta/paral_3_g.png');
    game.load.image('paral_soff_g_c', 'sprites/sfondi/grotta/paral_4_g.png');
    game.load.image('paral_soff_g_b', 'sprites/sfondi/grotta/paral_5_g.png');
    game.load.image('bg_g', 'sprites/sfondi/grotta/sfondo.png');

    //Bosco
    game.load.image('bg_b_l', 'sprites/sfondi/bg_bosco_landa.png');
    game.load.image('paral_bl', 'sprites/sfondi/bosco/parallasse_bl.png');
    game.load.image('paral_bl_2', 'sprites/sfondi/bosco/parallasse_bl_2.png');
    game.load.image('albero_1', 'sprites/sfondi/bosco/albero_1_b.png');
    game.load.image('albero_2', 'sprites/sfondi/bosco/albero_2_b.png');
    game.load.image('albero_3', 'sprites/sfondi/bosco/albero_3_b.png');

    //Landa
    game.load.image('albero_l_1', 'sprites/sfondi/landa/albero.png');
    game.load.image('albero_l_2', 'sprites/sfondi/landa/albero_2.png');
    game.load.image('rocce_fine', 'sprites/sfondi/landa/rocce_fine.png');

    //Platform
    //Città
    game.load.image('pavimento', 'sprites/platforms/citta/pavimento.png');
    game.load.image('plat_1', 'sprites/platforms/citta/plat_1.png');
    game.load.image('plat_2', 'sprites/platforms/citta/plat_2.png');
    game.load.image('plat_bomb', 'sprites/platforms/citta/plat_bomb.png');
    game.load.image('plat_ed', 'sprites/platforms/citta/plat_ed.png');
    game.load.image('plat_ed_2', 'sprites/platforms/citta/plat_ed_2.png');
    game.load.image('muretto', 'sprites/platforms/citta/muretto.png');
    game.load.image('block', 'sprites/platforms/citta/block.png');
    game.load.image('wall_1', 'sprites/platforms/citta/wall_1.png');
    game.load.image('wall_2', 'sprites/platforms/citta/wall_2.png');
    game.load.image('wall_3', 'sprites/platforms/citta/wall_3.png');
    game.load.image('wall_4', 'sprites/platforms/citta/wall_4.png');
    game.load.image('arco', 'sprites/platforms/citta/arco.png');
    game.load.image('gradino', 'sprites/platforms/citta/gradino.png');
    game.load.image('g1', 'sprites/platforms/citta/scala/gradino_1.png');
    game.load.image('g2', 'sprites/platforms/citta/scala/gradino_2.png');
    game.load.image('g3', 'sprites/platforms/citta/scala/gradino_3.png');
    game.load.image('g4', 'sprites/platforms/citta/scala/gradino_4.png');

    //Grotta
    game.load.image('pavimento_g', 'sprites/platforms/grotta/pavimento_grotta.png');
    game.load.image('soffitto_g', 'sprites/platforms/grotta/soffitto_grotta.png');
    game.load.image('controsoffitto_g', 'sprites/platforms/grotta/controsoffitto_grotta.png');
    game.load.image('ter_destro', 'sprites/platforms/grotta/ter_destro.png');
    game.load.image('ter_sinistro', 'sprites/platforms/grotta/ter_sinistro.png');
    game.load.image('plat_1_g', 'sprites/platforms/grotta/plat_1_g.png');
    game.load.image('plat_2_g', 'sprites/platforms/grotta/plat_2_g.png');
    game.load.image('masso_1', 'sprites/platforms/grotta/masso_1.png');
    game.load.image('masso_2', 'sprites/platforms/grotta/masso_2.png');
    game.load.image('masso_3', 'sprites/platforms/grotta/masso_3.png');
    game.load.image('masso_4', 'sprites/platforms/grotta/masso_4.png');
    game.load.image('stalag', 'sprites/platforms/grotta/stalag.png');
    game.load.image('stalat', 'sprites/platforms/grotta/stalat.png');
    game.load.image('arco_1_inf', 'sprites/platforms/grotta/arco_1_inf.png');
    game.load.image('arco_1_sup', 'sprites/platforms/grotta/arco_1_sup.png');
    game.load.image('toppa_g_1', 'sprites/platforms/grotta/toppa_g_1.png');
    game.load.image('toppa_g_2', 'sprites/platforms/grotta/toppa_g_2.png');

    //Bosco
    game.load.image('pavimento_b', 'sprites/platforms/bosco/pavimento_b.png');
    game.load.image('plat_cade_1_b', 'sprites/platforms/bosco/plat_cade_1_b.png');
    game.load.image('plat_1_1_b', 'sprites/platforms/bosco/plat_1_1_b.png');
    game.load.image('plat_1_2_b', 'sprites/platforms/bosco/plat_1_2_b.png');
    game.load.image('plat_2_1_b', 'sprites/platforms/bosco/plat_2_1_b.png');
    game.load.image('plat_2_2_b', 'sprites/platforms/bosco/plat_2_2_b.png');
    game.load.image('plat_2_3_b', 'sprites/platforms/bosco/plat_2_3_b.png');
    game.load.image('blocchetto_1', 'sprites/platforms/bosco/blocchetto_1.png');
    game.load.image('blocchetto_2', 'sprites/platforms/bosco/blocchetto_2.png');
    game.load.image('blocchetto_3', 'sprites/platforms/bosco/blocchetto_3.png');
    game.load.image('blocco_grande_b', 'sprites/platforms/bosco/blocco_grande_b.png');
    game.load.image('rovi', 'sprites/platforms/bosco/rovi.png');
    game.load.image('spingi', 'sprites/platforms/bosco/spingi.png');

    //Landa
    game.load.image('pavimento_grad', 'sprites/platforms/landa/pavimento_gradiente.png');
    game.load.image('pavimento_l', 'sprites/platforms/landa/pavimento_landa.png');
    game.load.image('stele_l', 'sprites/platforms/landa/stele_landa.png');
    game.load.image('plat_1_l', 'sprites/platforms/landa/plat_1.png');
    game.load.image('plat_2_l', 'sprites/platforms/landa/plat_2.png');
    game.load.image('plat_3_l', 'sprites/platforms/landa/plat_3.png');
    game.load.image('plat_4_l', 'sprites/platforms/landa/plat_4.png');

    //Colonne
    game.load.image('col_1', 'sprites/colonne/col_1.png');
    game.load.image('col_2', 'sprites/colonne/col_2.png');
    game.load.image('col_3', 'sprites/colonne/col_3.png');
    game.load.image('col_4', 'sprites/colonne/col_4.png');
    game.load.image('col_ed_1', 'sprites/colonne/col_ed_1.png');
    game.load.image('col_ed_2', 'sprites/colonne/col_ed_2.png');
    game.load.image('col_rotta', 'sprites/colonne/col_rotta.png');
    game.load.image('col_ed_grotta', 'sprites/colonne/col_ed_grotta.png');
    game.load.image('col_ed_b', 'sprites/colonne/col_ed_b.png');

    //Sprites
    game.load.image('hearts', 'sprites/hearts.png');
    game.load.image('hearts_back', 'sprites/hearts_back.png');
    game.load.image('heart', 'sprites/heart.png');
    game.load.image('barra_morte', 'sprites/barra_morte.png');
    game.load.image('barra_morte_back', 'sprites/barra_morte_back.png');
    game.load.image('speranze', 'sprites/speranze.png');
    game.load.image('speranze_back', 'sprites/speranze_back.png');
    game.load.image('bullet', 'sprites/bullet.png');
    game.load.image('cippo', 'sprites/cippo.png');
    game.load.image('indo', 'sprites/indovinello.png');
    game.load.image('lance', 'sprites/lance.png');
    game.load.image('lance_2', 'sprites/lance_2.png');
    game.load.image('lance_3', 'sprites/lance_3.png');

    //Testi pop-up
    game.load.image('t_salto', 'sprites/testi/comandi/t_salto.png');
    game.load.image('t_sparo', 'sprites/testi/comandi/t_sparo.png');
    game.load.image('t_arra', 'sprites/testi/comandi/t_arra.png');
    game.load.image('t_muovi', 'sprites/testi/comandi/t_muovi.png');
    game.load.image('i_1', 'sprites/testi/indovinelli/i_1.png');
    game.load.image('i_2', 'sprites/testi/indovinelli/i_2.png');
    game.load.image('i_3', 'sprites/testi/indovinelli/i_3.png');
    //Testi Dialogo Finale
    game.load.image('opz_1', 'sprites/testi/dialoghi/opz_1.png');
    game.load.image('opz_2_1', 'sprites/testi/dialoghi/opz_2_1.png');
    game.load.image('opz_2_2', 'sprites/testi/dialoghi/opz_2_2.png');
    game.load.image('t_1_1', 'sprites/testi/dialoghi/t_1_1.png');
    game.load.image('t_1_2', 'sprites/testi/dialoghi/t_1_2.png');
    game.load.image('t_1_3', 'sprites/testi/dialoghi/t_1_3.png');
    game.load.image('t_2_1', 'sprites/testi/dialoghi/t_2_1.png');
    game.load.image('t_2_2', 'sprites/testi/dialoghi/t_2_2.png');
    game.load.image('t_3_1', 'sprites/testi/dialoghi/t_3_1.png');
    game.load.image('t_3_2', 'sprites/testi/dialoghi/t_3_2.png');
    game.load.image('t_3_3', 'sprites/testi/dialoghi/t_3_3.png');
    game.load.image('t_3_4', 'sprites/testi/dialoghi/t_3_4.png');
    game.load.image('t_3_5', 'sprites/testi/dialoghi/t_3_5.png');
    game.load.image('t_3_6', 'sprites/testi/dialoghi/t_3_6.png');
    game.load.image('t_3_7', 'sprites/testi/dialoghi/t_3_7.png');

    //Sheets
    game.load.spritesheet('player_w_j_i_c_boi_p_d', 'sprites/sheet/pandora_w_j_i_c_boi_p_d.png', 1008 / 8, 912 / 8, 60);
    game.load.spritesheet('old_w_m', 'sprites/sheet/vecchiaia_w_m.png', (2048 / 8), 705 / 3, 20);
    game.load.spritesheet('mad_w_m', 'sprites/sheet/mad_w_m.png', (1848 / 8), (705 / 3), 20);
    game.load.spritesheet('pain_w_b_m', 'sprites/sheet/pain_w_b_m.png', (1864 / 8), (940 / 4), 28);
    game.load.spritesheet('morte_w_i', 'sprites/sheet/morte_w_i.png', (1384 / 8), 199, 16);
    game.load.spritesheet('morte_bullet', 'sprites/sheet/morte_attack.png', (204 / 2), 48, 2);
    game.load.spritesheet('glowing', 'sprites/sheet/glow1_sheet.png', 300, 300, 6);
    game.load.spritesheet('speranza_b', 'sprites/sheet/speranza_b.png', (651 / 6), (251 / 2), 12);
    game.load.spritesheet('male_a', 'sprites/sheet/male_2.png', (651 / 6), 126, 6);
    game.load.spritesheet('vaso_break', 'sprites/sheet/vaso_break.png', (1680 / 14), 100, 14);
    game.load.spritesheet('stele_c', 'sprites/sheet/stele_c.png', (2050 / 5), (3790 / 6), 30);
    game.load.spritesheet('leaf', 'sprites/sheet/leaf.png', 5, 9, 3);

    //Testi tasti
    game.load.image('pausa_esci', 'sprites/immagini/tasti/menu.png');
    game.load.image('pausa_new', 'sprites/immagini/tasti/new_game.png');
    game.load.image('cop_gioca', 'sprites/immagini/tasti/cop_gioca.png');
    game.load.image('cop_crediti', 'sprites/immagini/tasti/cop_crediti.png');
    game.load.image('cop_storia', 'sprites/immagini/tasti/cop_storia.png');
    game.load.image('freccia_dx', 'sprites/immagini/tasti/freccia_dx.png');
    game.load.image('freccia_dx_nera', 'sprites/immagini/tasti/freccia_dx_nera.png');
    game.load.image('freccia_dx_gialla', 'sprites/immagini/tasti/freccia_dx_gialla.png');
    game.load.image('freccia_sx', 'sprites/immagini/tasti/freccia_sx.png');
    game.load.image('freccia_nera', 'sprites/immagini/tasti/freccia_nera.png');
    game.load.image('freccia_gialla', 'sprites/immagini/tasti/freccia_gialla.png');
    game.load.image('esci', 'sprites/immagini/tasti/esci.png');
    game.load.image('esci_nero', 'sprites/immagini/tasti/esci_nero.png');
    game.load.image('esci_giallo', 'sprites/immagini/tasti/esci_giallo.png');
    game.load.image('continua_btn', 'sprites/immagini/tasti/continua_btn.png');

    //Immagini 1024x768
    game.load.image('pausa_img', 'sprites/immagini/pausa/pausa.png');
    game.load.image('copertina', 'sprites/immagini/render/copertina.png');
    game.load.image('crediti', 'sprites/immagini/render/crediti.png');
    game.load.image('finale_bad', 'sprites/immagini/render/finale_bad.png');
    game.load.image('finale_med', 'sprites/immagini/render/finale_med.png');
    game.load.image('finale_good', 'sprites/immagini/render/finale_good.png');
    game.load.image('render_1', 'sprites/immagini/render/render_1.png');
    game.load.image('render_2', 'sprites/immagini/render/render_2.png');
    game.load.image('render_3', 'sprites/immagini/render/render_3.png');
    game.load.image('render_4', 'sprites/immagini/render/render_4.png');
    game.load.image('render_5', 'sprites/immagini/render/render_5.png');
    game.load.image('render_6', 'sprites/immagini/render/render_6.png');
    game.load.image('render_morte', 'sprites/immagini/render/render_morte.png');
    game.load.image('testo_good', 'sprites/immagini/render/testo_good.png');
    game.load.image('testo_med', 'sprites/immagini/render/testo_med.png');
    game.load.image('testo_bad', 'sprites/immagini/render/testo_bad.png');
}

//Gruppi
var grounds;
var sfondi_pp;
var platforms;
var stalats;
var rami;
var rami_sx;
var rami_dx;
var colonne;
var colonne_ed;
var lance;
var vasi;
var cuori_singoli;
var cps;
var speranze;
var cippi;
var testi;
var spinto;
//Pausa e Render
var immagine;
var all_btns;
var cop_btns;
var sto_btns;
var dead_btns;
var pausa_btns;
var home_btn;
//Player
var player;
var glow;
var weapon;
//Morte
var morte;
var barra_vita_grp;
var weapon_morte;
var dialog_grp;
//Nemici
var enemies;
var e_mads;
var e_pains;
var e_olds;
//Comandi
var keys;
var fireButton;
//Vita e barre
var maxLives = 6;
var viteMorte = 60;
var cuori;
var cuori_grp;
var cropRect;
var cropRect_spe;
//Spawn
var spawn_x = 800;
var spawn_y = 1945;
//Altezza fissa dei pavimenti
var ground_y = 2000;
var ground_y_2 = 3000;
//Sentinelle
var pausa = true;
var gameStart = false;
var terremoto = false;
var crollo_stele = false;
var scontro_finale = false;
var final = "null";
var n_dia = 0;
var quale_dia = 0;
//Emetter di foglie
var foglie;

function create() {
    document.body.style.backgroundImage = "url('assets/html/Background/square_storia.png')";
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //Limiti del mondo
    game.world.setBounds(0, 0, 30000, 4000);

    //Citta
    //Background
    this.add.image(0, 0, 'bg');
    //Foreground dietro
    this.fr_dietro = this.game.add.tileSprite(
        0,
        ground_y,
        12000,
        705,
        'fg_2'
    );
    this.fr_dietro.anchor.setTo(0, 1);
    //Foreground davanti
    this.fr_davanti = this.game.add.tileSprite(
        0,
        ground_y,
        12000,
        504,
        'fg'
    );
    this.fr_davanti.anchor.setTo(0, 1);

    //Grotta
    //Background
    this.add.image(7200, ground_y, 'bg_g');
    this.par_grotta_dietro = this.game.add.tileSprite(
        7200,
        ground_y_2,
        10000,
        this.game.cache.getImage('paral_2_g').height,
        'paral_2_g'
    );
    this.par_grotta_dietro.anchor.setTo(0, 1);
    this.par_grotta_davanti = this.game.add.tileSprite(
        7200,
        ground_y_2,
        10000,
        this.game.cache.getImage('paral_1_g').height,
        'paral_1_g'
    );
    this.par_grotta_davanti.anchor.setTo(0, 1);
    //Sopra
    this.par_grotta_soffitto = this.game.add.tileSprite(
        7200,
        ground_y,
        this.game.cache.getImage('paral_soff_g_c').width * 1,
        this.game.cache.getImage('paral_soff_g_c').height,
        'paral_soff_g_c'
    );
    this.par_grotta_soffitto.anchor.setTo(0, 0);
    this.par_grotta_soffitto_2 = this.game.add.tileSprite(
        7200 + this.game.cache.getImage('paral_soff_g').width * 1,
        ground_y,
        this.game.cache.getImage('paral_soff_g').width * 3,
        this.game.cache.getImage('paral_soff_g').height,
        'paral_soff_g'
    );
    this.par_grotta_soffitto_2.anchor.setTo(0, 0);

    //Bosco
    //Background
    this.add.image(15000, ground_y - this.game.cache.getImage('bg_b_l').height + 78, 'bg_b_l');
    this.par_bosco_dietro = game.add.sprite(15000, ground_y + 78, 'paral_bl_2');
    this.par_bosco_dietro.anchor.setTo(0, 1);
    this.par_bosco_dietro.visible = true;
    this.par_bosco_davanti = game.add.sprite(15000, ground_y + 78, 'paral_bl');
    this.par_bosco_davanti.anchor.setTo(0, 1);
    this.par_bosco_davanti.visible = true;
    this.par_grotta_soffitto_3 = this.game.add.tileSprite(
        7200 + this.game.cache.getImage('paral_soff_g_b').width * 3,
        ground_y,
        1000,
        this.game.cache.getImage('paral_soff_g_b').height,
        'paral_soff_g_b'
    );
    this.par_grotta_soffitto_3.anchor.setTo(0, 0);

    //Grounds - il modo meno efficiente per inserire più pavimenti
    grounds = game.add.physicsGroup();

    this.ground = this.game.add.tileSprite(
        0,
        ground_y,
        7500 + this.game.cache.getImage('wall_4').width / 2,
        this.game.cache.getImage('pavimento').height,
        'pavimento'
    );

    this.ground_2 = this.game.add.tileSprite(
        7900,
        ground_y,
        7600,
        this.game.cache.getImage('pavimento').height,
        'pavimento'
    );

    this.ground_3 = this.game.add.tileSprite(
        7000,
        ground_y_2,
        20000,
        this.game.cache.getImage('pavimento').height,
        'pavimento_g'
    );

    this.ground_4 = this.game.add.tileSprite(
        15500 + this.game.cache.getImage('plat_2_g').width,
        ground_y,
        900,
        this.game.cache.getImage('pavimento_b').height,
        'pavimento_b'
    );

    this.ground_5 = this.game.add.tileSprite(
        17100,
        ground_y,
        1000,
        this.game.cache.getImage('pavimento_b').height,
        'pavimento_b'
    );

    this.ground_6 = this.game.add.tileSprite(
        19200,
        ground_y,
        2800,
        this.game.cache.getImage('pavimento_b').height,
        'pavimento_b'
    );

    this.ground_7 = this.game.add.tileSprite(
        22500,
        ground_y,
        5000,
        this.game.cache.getImage('pavimento_l').height,
        'pavimento_l'
    );

    this.controsoffitto_g = this.game.add.tileSprite(
        7900,
        ground_y + this.game.cache.getImage('pavimento').height,
        3100 - this.game.cache.getImage('ter_destro').width + 20,
        this.game.cache.getImage('controsoffitto_g').height,
        'controsoffitto_g'
    );

    this.controsoffitto_g_2 = this.game.add.tileSprite(
        11800,
        ground_y + this.game.cache.getImage('pavimento').height,
        3700 - this.game.cache.getImage('ter_destro').width,
        this.game.cache.getImage('controsoffitto_g').height,
        'controsoffitto_g'
    );

    this.soffitto_g_2 = this.game.add.tileSprite(
        11500,
        ground_y_2 - 768 + this.game.cache.getImage('soffitto_g').height / 2,
        4000,
        this.game.cache.getImage('soffitto_g').height,
        'soffitto_g'
    );
    this.soffitto_g_2.anchor.setTo(0, 0.5);

    this.soffitto_g = this.game.add.tileSprite(
        7900,
        ground_y_2 - 768 + this.game.cache.getImage('soffitto_g').height / 2,
        3100,
        this.game.cache.getImage('soffitto_g').height,
        'soffitto_g'
    );
    this.soffitto_g.anchor.setTo(0, 0.5);

    grounds.add(this.ground);
    grounds.add(this.ground_2);
    grounds.add(this.ground_3);
    grounds.add(this.ground_4);
    grounds.add(this.ground_5);
    grounds.add(this.ground_6);
    grounds.add(this.ground_7);
    grounds.add(this.controsoffitto_g);
    grounds.add(this.controsoffitto_g_2);
    grounds.add(this.soffitto_g);
    grounds.add(this.soffitto_g_2);

    grounds.setAll("body.immovable", true);

    //Elementi di sfondo in primo piano / fissi
    sfondi_pp = game.add.group();
    //Citta
    sfondi_pp.create(275, ground_y, 'cartello');
    sfondi_pp.create(4600, ground_y, 'int_1');
    sfondi_pp.create(5650, ground_y, 'est');
    sfondi_pp.create(5700, ground_y, 'carrucola');
    sfondi_pp.create(6800, ground_y - this.game.cache.getImage('arco').height, 'col_4');
    sfondi_pp.create(6950, ground_y - this.game.cache.getImage('arco').height, 'col_rotta');
    sfondi_pp.create(7100, ground_y - this.game.cache.getImage('arco').height, 'col_4');
    sfondi_pp.create(7500, ground_y, 'int_2');
    //Bosco
    sfondi_pp.create(17100, ground_y, 'albero_1');
    sfondi_pp.create(17600, ground_y, 'albero_2');
    sfondi_pp.create(21500, ground_y, 'albero_3');
    //Landa
    sfondi_pp.create(24500, ground_y, 'albero_l_1');
    sfondi_pp.create(25100, ground_y, 'albero_l_2');

    sfondi_pp.children.forEach(function (sfondi_po) {
        sfondi_po.anchor.setTo(0, 1);
    });

    //Cippi
    cippi = game.add.physicsGroup();
    c_muovi = cippi.create(600, ground_y, 'cippo');
    c_salto = cippi.create(800, ground_y, 'cippo');
    c_sparo = cippi.create(1100, ground_y - this.game.cache.getImage('muretto').height, 'cippo');
    c_arra = cippi.create(3200, ground_y - this.game.cache.getImage('col_3').height - this.game.cache.getImage('plat_1').height, 'cippo');
    indo_1 = cippi.create(1600, ground_y - this.game.cache.getImage('muretto').height, 'indo');
    indo_2 = cippi.create(8100, ground_y_2, 'indo');
    indo_3 = cippi.create(16400, ground_y, 'indo');

    cippi.children.forEach(function (cippo) {
        cippo.anchor.setTo(0.5, 1);
    });
    //Testi
    testi = game.add.group();
    t_muovi = testi.create(c_muovi.x, c_muovi.y - 200, 't_muovi');
    t_salto = testi.create(c_salto.x, c_salto.y - 200, 't_salto');
    t_sparo = testi.create(c_sparo.x, c_sparo.y - 200, 't_sparo');
    t_arra = testi.create(c_arra.x + 250, c_arra.y - 150, 't_arra');
    i_1 = testi.create(indo_1.x, indo_1.y - 300, 'i_1');
    i_2 = testi.create(indo_2.x, indo_2.y - 300, 'i_2');
    i_3 = testi.create(indo_3.x, indo_3.y - 300, 'i_3');

    testi.forEach(function (testo) {
        testo.anchor.setTo(0.5);
        testo.alpha = 0;
    });

    //Creo l'oggetto glow, deve stare dietro al player
    glow = game.add.sprite(0, 0, 'glowing');
    //Player
    player = game.add.sprite(spawn_x, spawn_y, 'player_w_j_i_c_boi_p_d');
    player.animations.add('player_walk', [0, 1, 2, 3, 4, 5, 6, 7]);
    player.animations.add('player_jump', [8, 9, 10, 11, 12, 13, 14, 15]);
    player.animations.add('player_fall', [12, 13, 14, 15]);
    player.animations.add('player_idle', [16, 17, 18, 19, 20, 21, 22, 23]);
    player.animations.add('player_climb', [24, 25, 26, 27, 28, 29, 30, 31]);
    player.animations.add('player_boi', [32, 33, 34, 35, 36, 37, 38, 39]);
    player.animations.add('player_push', [40, 41, 42, 43, 44, 45, 46, 47]);
    player.animations.add('player_die', [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]);

    player.anchor.setTo(0.5);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
    player.body.setSize(50, 100, 37, 11);

    player.lives = maxLives;
    player.speranze = 0;
    player.tocca = true;
    player.moving = false;
    player.spinge = false;
    player.salto = false;
    player.cade = false;
    player.idle = true;
    player.bloccato = false;
    player.mortoo = false;
    player.frameRate = 12;

    //Glow
    glow.alpha = 0;
    glow.anchor.setTo(0.5, 0.5);
    glow.animations.add('glow');
    player.addChild(glow); //Il glow diventa parte del player

    //Arma
    weapon = game.add.weapon(1, 'bullet');
    weapon.trackSprite(player, 13, 10);
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    weapon.bulletLifespan = 1500;
    weapon.bloccata = false;
    weapon.appenaFired = false;

    weapon.bullets.forEach(function (b) {
        b.scale.setTo(1.5);
    });

    //HUD - Cuori e Speranze
    cuori_grp = game.add.group();
    cuori_back = cuori_grp.create(10, 10, 'hearts_back');
    cropRect = new Phaser.Rectangle(0, 0, (420 / 10) * (player.lives), cuori_back.height);
    cuori_back.crop(cropRect);
    cuori = cuori_grp.create(10, 10, 'hearts');
    spe_label = cuori_grp.create(10, 40, "speranze");
    cuori_grp.fixedToCamera = true;

    //Camera
    game.camera.follow(player, Phaser.Camera.FOLLOW, 0.1, 0.1);
    game.camera.deadzone = new Phaser.Rectangle(150, 150, 100, 500);

    //Piattaforme (le posiziono sfruttando le dimensioni esatte degli asset e non coordinate fisse)
    platforms = game.add.physicsGroup();
    platforms.create(0, ground_y, 'rocce');
    platforms.create(1000, ground_y, "muretto");
    platforms.create(2700, ground_y - this.game.cache.getImage('col_3').height, 'plat_1');
    platforms.create(4600, ground_y, 'block');
    platforms.create(4600, ground_y - this.game.cache.getImage('block').height, 'wall_1');
    platforms.create(4600, 1600, 'plat_1');

    pb1 = platforms.create(4850, 1900, 'plat_bomb');
    pb2 = platforms.create(5050, 1900, 'plat_bomb');

    platforms.create(4856, 1335, 'plat_1');
    platforms.create(4600 + this.game.cache.getImage('int_1').width - this.game.cache.getImage('block').width, ground_y, 'block');
    platforms.create(4600 + this.game.cache.getImage('int_1').width - this.game.cache.getImage('wall_2').width + 10, 1600, 'wall_2');

    plat_mossa1 = platforms.create(5650, 1900, 'plat_2');
    plat_mossa1.body.velocity.y = -100;

    //Esterno
    platforms.create(5650 + this.game.cache.getImage('est').width - this.game.cache.getImage('plat_2').width,
        ground_y - this.game.cache.getImage('est').height, 'plat_2');
    platforms.create(6800, ground_y, 'arco');
    platforms.create(6823, ground_y - this.game.cache.getImage('arco').height - this.game.cache.getImage('col_4').height, 'plat_2');

    //Scala
    for (var i = 0; i < 6; i++)
        platforms.create(6800 + this.game.cache.getImage('arco').width - this.game.cache.getImage('gradino').width / 2 + (i * 50),
            ground_y - this.game.cache.getImage('arco').height - (i * 50), 'gradino');

    //Interno 2
    platforms.create(7500 - this.game.cache.getImage('wall_4').width / 2, ground_y, 'wall_4');
    platforms.create(7500, ground_y - this.game.cache.getImage('int_2').height + this.game.cache.getImage('plat_1').height, 'plat_1');
    platforms.create(7500, ground_y - 200, 'plat_1');
    platforms.create(7500 + this.game.cache.getImage('int_2').width - this.game.cache.getImage('plat_1').width, ground_y - 450, 'plat_1');
    platforms.create(7600, ground_y - this.game.cache.getImage('int_2').height, 'wall_3');
    pb3 = platforms.create(7400, ground_y - this.game.cache.getImage('int_2').height - this.game.cache.getImage('wall_3').height, 'plat_2');
    platforms.create(7500 + this.game.cache.getImage('int_2').width - this.game.cache.getImage('wall_2').width / 2, ground_y, 'wall_2');

    //Monte
    platforms.create(8700, ground_y, 'monte');
    //Pavimento che crolla
    pav_crolla = platforms.create(7500, ground_y + this.game.cache.getImage('pavimento').height, "pavimento");
    pav_crolla.scale.x = 2;

    //Grotta
    platforms.create(7000, ground_y_2, 'toppa_g_1');
    platforms.create(8400, ground_y_2, 'masso_1');
    platforms.create(9600, ground_y_2, 'masso_2');
    platforms.create(10000, ground_y_2, 'masso_3');
    platforms.create(10800, 2600, 'plat_1_g');
    platforms.create(11200, 2450, 'plat_1_g');
    platforms.create(11000 - this.game.cache.getImage('ter_destro').width + 10, ground_y + this.game.cache.getImage('pavimento').height + this.game.cache.getImage('ter_destro').height, 'ter_destro');
    platforms.create(11800 - this.game.cache.getImage('ter_sinistro').width, ground_y + this.game.cache.getImage('pavimento').height + this.game.cache.getImage('ter_sinistro').height, 'ter_sinistro');
    platforms.create(11800 + 3700 - this.game.cache.getImage('ter_destro').width, ground_y + this.game.cache.getImage('pavimento').height + this.game.cache.getImage('ter_destro').height, 'ter_destro');
    platforms.create(11100, ground_y_2, 'masso_1');
    platforms.create(12200, ground_y_2, 'arco_1_inf');
    platforms.create(12200, ground_y_2 - this.game.cache.getImage('arco_1_inf').height, 'arco_1_sup');
    platforms.create(12650, ground_y_2, 'masso_1');
    platforms.create(12900, ground_y_2, 'masso_4');
    platforms.create(13500, 2700, 'plat_1_g');
    platforms.create(14100, 2800, 'plat_2_g');

    stele = platforms.create(14800, ground_y_2 + 2, 'stele_c');
    stele.frame = 0;
    stele.animations.add("5", [1, 2, 3, 4]);
    stele.animations.add("4", [5, 6, 7, 8]);
    stele.animations.add("3", [9, 10, 11, 12]);
    stele.animations.add("2", [13, 14, 15, 16]);
    stele.animations.add("1", [17, 18, 19, 20]);
    stele.animations.add("crolla", [21, 22, 23, 24, 25, 26, 27, 28]);

    ascensore = platforms.create(15500, ground_y_2, 'plat_2_g');
    ascensore.salito = false;

    platforms.create(15880, ground_y_2, 'toppa_g_2');

    //Bosco
    for (var i = 0; i < 3; i++)
        platforms.create(18200 + (i * 300), ground_y + 78, "blocchetto_" + (i + 1));

    platforms.create(20300, ground_y, "blocco_grande_b");
    platforms.create(22000, ground_y + this.game.cache.getImage('pavimento_grad').height, "pavimento_grad");

    //Landa
    stele_l = platforms.create(23950, ground_y, "stele_l");
    stele_l.visible = false;
    platforms.create(25650, ground_y, "rocce_fine");

    platforms.children.forEach(function (platform) {
        platform.anchor.setTo(0, 1);
    });

    //Piattaforme speciali
    plat_ed = platforms.create(4078, 1700 - this.game.cache.getImage('col_ed_1').height, "plat_ed");
    plat_ed_2 = platforms.create(6400, 1140, "plat_ed_2");
    for (var i = 0; i < 4; i++) {
        gradino = platforms.create(4400, ground_y - (i * 75), "g" + (i + 1));
        gradino.anchor.setTo(1, 1);
    }

    stalats = game.add.physicsGroup();
    for (var i = 0; i < 4; i++)
        stalats.create(8800 + (i * 200), ground_y_2 - 768 + this.game.cache.getImage('soffitto_g').height / 2, 'stalat');
    stalats.create(11700, ground_y_2 - 768 + this.game.cache.getImage('soffitto_g').height / 2, 'stalat');

    //Bosco
    rami = game.add.physicsGroup();
    rami_dx = game.add.physicsGroup();

    rami_dx.create(17300, 1850, "plat_1_1_b");
    rami_dx.create(17250, 1675, "plat_1_2_b");
    rami_dx.create(17280, 1500, "plat_1_2_b");
    rami_dx.create(17250, 1300, "plat_1_2_b");
    rami_dx.create(17800, 1650, "plat_2_3_b");
    rami_dx.create(19850, 1200, "plat_2_3_b");
    rami_dx.create(21700, 1750, "plat_1_2_b");
    rami_dx.create(21700, 1580, "plat_2_3_b");
    rami_dx.create(21700, 1350, "plat_1_1_b");
    //Landa
    rami_dx.create(24690, 1750, "plat_1_l");
    rami_dx.create(25340, 1700, "plat_1_l");
    rami_dx.create(25320, 1925, "plat_3_l");

    rami_dx.children.forEach(function (ramo) {
        ramo.anchor.setTo(0, 1);
    });

    rami_sx = game.add.physicsGroup();

    ramo_cade1 = stalats.create(17150, 1450, "plat_cade_1_b");
    rami_sx.create(17700, 1750, "plat_2_1_b");
    rami_sx.create(17700, 1575, "plat_2_2_b");
    rami_sx.create(17700, 1400, "plat_2_1_b");
    rami_sx.create(19700, 1860, "plat_2_2_b");
    rami_sx.create(21600, 1850, "plat_2_1_b");
    rami_sx.create(21600, 1650, "plat_2_2_b");
    rami_sx.create(21630, 1450, "plat_2_1_b");
    //Landa
    rami_sx.create(24670, 1875, "plat_2_l");
    rami_sx.create(24655, 1625, "plat_4_l");
    rami_sx.create(25220, 1775, "plat_2_l");
    rami_sx.create(25290, 1600, "plat_2_l");

    rami_sx.children.forEach(function (ramo) {
        ramo.anchor.setTo(1, 1);
    });

    rami.add(rami_dx);
    rami.add(rami_sx);
    rami.forEach(function (ramo) {
        ramo.setAll('body.checkCollision.up', true);
        ramo.setAll('body.checkCollision.down', false);
        ramo.setAll('body.checkCollision.right', false);
        ramo.setAll('body.checkCollision.left', false);
        ramo.setAll('body.immovable', true);
    });

    stalats.setAll('body.immovable', true);
    stalats.children.forEach(function (stalat) {
        stalat.anchor.setTo(0.5, 0);
        stalat.hit = false;
    });
    ramo_cade1.anchor.setTo(1, 1);
    ramo_cade1.body.setSize(ramo_cade1.width, ramo_cade1.height - 20, 0, 10);

    platforms.add(stalats);
    plat_ed.anchor.setTo(0.5, 1);
    plat_ed_2.anchor.setTo(0.5, 1);

    platforms.setAll('body.immovable', true);

    //Colonne
    colonne = game.add.physicsGroup();
    c1 = colonne.create(1950, ground_y, 'col_1');
    c2 = colonne.create(2200, ground_y, 'col_2');
    colonne.create(2450, ground_y, 'col_3');
    colonne.create(2775, ground_y, 'col_3');
    colonne.create(3275, ground_y, 'col_3');

    colonne.setAll('body.immovable', true);
    colonne.children.forEach(function (colonna) {
        colonna.anchor.setTo(0.5, 1);
    });
    c1.body.setSize(78, c1.height - 3, (c1.width - 78) / 2, 3);
    c2.body.setSize(78, c2.height - 3, (c2.width - 78) / 2, 3);

    //Colonne Edera
    colonne_ed = game.add.physicsGroup();

    for (var i = 0; i < 3; i++) {
        c4 = colonne_ed.create(3830 + (i * 248), 1700, 'col_ed_1')
        c4.anchor.setTo(0.5, 1);
    }
    colonne_ed.create(6400, ground_y, 'col_ed_2');
    colonne_ed.create(12100, ground_y_2, 'col_ed_grotta');
    colonne_ed.create(19800, ground_y, "col_ed_b");

    colonne_ed.children.forEach(function (colonna_ed) {
        colonna_ed.anchor.setTo(0.5, 1);
        colonna_ed.offset = 0;
    });

    colonne_ed.setAll('body.immovable', true);
    colonne_ed.setAll('body.checkCollision.up', true);
    colonne_ed.setAll('body.checkCollision.down', false);
    colonne_ed.setAll('body.checkCollision.left', false);
    colonne_ed.setAll('body.checkCollision.right', false);

    lance = game.add.physicsGroup();
    //Lance
    for (var i = 0; i < 6; i++) lance.create((1820 + i * 160), ground_y, "lance");
    lance.create(3400, ground_y, "lance");
    for (var i = 0; i < 2; i++) lance.create((3950 + i * 248), 1700, "lance");
    lance.create(4500, ground_y, "lance");
    for (var i = 0; i < 3; i++) lance.create((4900 + i * 160), ground_y, "lance");
    for (var i = 0; i < 6; i++) lance.create((5570 + i * 160), ground_y, "lance");
    for (var i = 0; i < 3; i++) lance.create(7500 + this.game.cache.getImage('int_2').width - this.game.cache.getImage('wall_2').width, 1100 + (i * 160), "lance_2");
    for (var i = 0; i < 2; i++) lance.create(7500 + this.game.cache.getImage('wall_4').width, 1550 + (i * 160), "lance_3");
    //Stalagmiti
    for (var i = 0; i < 10; i++) lance.create(8800 + (i * 86), ground_y_2, "stalag");
    for (var i = 0; i < 3; i++) lance.create(9850 + (i * 60), ground_y_2, "stalag");
    for (var i = 0; i < 6; i++) lance.create(11500 + (i * 86), ground_y_2, "stalag");
    for (var i = 0; i < 10; i++) lance.create(13350 + (i * 86), ground_y_2, "stalag");
    //Rovi
    for (var i = 0; i < 3; i++) lance.create(17850 + (i * 86), ground_y, "rovi");
    for (var i = 0; i < 6; i++) lance.create(19800 + (i * 86), ground_y, "rovi");
    for (var i = 0; i < 6; i++) lance.create(21180 + (i * 86), ground_y, "rovi");

    lance.setAll('body.immovable', true);
    lance.children.forEach(function (lancia) {
        lancia.anchor.setTo(0.5, 1);
    });

    //Oggetti da spingere
    spinto = game.add.physicsGroup();
    spi = spinto.create(17590, ground_y, "spingi");
    spinto.create(19250, ground_y, "spingi");

    spinto.forEach(function (s) {
        s.anchor.setTo(0, 1);
        s.body.immovable = false;
        s.body.gravity.y = 100;
    });

    //Cuori
    cuori_singoli = game.add.physicsGroup();
    cuori_singoli.create(23290, ground_y - 65, 'heart');

    cuori_singoli.setAll('body.immovable', true);
    cuori_singoli.children.forEach(function (cuore_singolo) {
        cuore_singolo.anchor.setTo(0.5);
    });

    //Vasi
    vasi = game.add.physicsGroup();
    vasi.create(4725, ground_y - this.game.cache.getImage('block').height, 'vaso_break');
    vasi.create(7650, ground_y, 'vaso_break');
    vasi.create(8200, ground_y, 'vaso_break');
    vasi.create(10850, ground_y_2, 'vaso_break');
    vasi.create(15350, ground_y_2, 'vaso_break');
    vasi.create(16600, ground_y, 'vaso_break');
    vasi.create(17375, 1300, 'vaso_break');
    vasi.create(17575, 1600, 'vaso_break');
    vasi.create(21800, 1600, 'vaso_break');
    v_rotto = vasi.create(23270, 1600, 'vaso_break');

    vasi.setAll('body.immovable', false);
    vasi.children.forEach(function (vaso) {
        vaso.animations.add("break");
        vaso.frame = 0;
        vaso.rotto = false;
        vaso.anchor.setTo(0.5, 1);
        vaso.body.gravity.y = 200;
        vaso.body.setSize(65, 100, 23, 0);
    });
    v_rotto.frame = 13;
    v_rotto.rotto = true;

    //Nemici
    enemies = game.add.physicsGroup();

    e_mads = game.add.physicsGroup();
    e_mads.create(1300, 1695, 'mad_w_m');
    e_mads.create(3000, 1300, 'mad_w_m');
    e_mads.create(4070, 900, 'mad_w_m');
    e_mads.create(4990, 1200, 'mad_w_m');
    e_mads.create(4900, 1470, 'mad_w_m');
    e_mads.create(7850, 1170, 'mad_w_m');
    e_mads.create(7750, 1670, 'mad_w_m');

    e_mads.children.forEach(function (e_m) {
        e_m.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]);
        e_m.animations.add('morte', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        e_m.scale.x = .35;
        e_m.body.setSize(130, e_m.height - 40, 40, 40);
    });

    e_pains = game.add.physicsGroup();
    e_pains.create(8400, 2550, 'pain_w_b_m');
    e_pains.create(10000, 2550, 'pain_w_b_m');
    e_pains.create(10300, 2550, 'pain_w_b_m');
    e_pains.create(10820, 2500, 'pain_w_b_m');
    e_pains.create(14120, 2700, 'pain_w_b_m');
    e_p_spawn = e_pains.create(14330, 2950, 'pain_w_b_m');

    e_pains.children.forEach(function (e_m) {
        e_m.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        e_m.animations.add('morte', [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
        e_m.scale.x = -.35;
        e_m.body.setSize(130, e_m.height - 40, 40, 40);
    });

    e_olds = game.add.physicsGroup();
    e_olds.create(20500, 1475, 'old_w_m');
    e_olds.create(20650, 1475, 'old_w_m');
    e_olds.create(21884, 1960, 'old_w_m');

    e_olds.children.forEach(function (e_m) {
        e_m.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]);
        e_m.animations.add('morte', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        e_m.scale.x = .35;
        e_m.body.setSize(140, e_m.height - 20, 50, 20);
    });

    enemies.add(e_mads);
    enemies.add(e_pains);
    enemies.add(e_olds);

    enemies.children.forEach(function (enemy) {
        enemy.setAll("body.gravity.y", 500);
        enemy.setAll("body.velocity.x", 50);
        enemy.forEach(function (e) {
            e.lives = 2;
            e.anchor.setTo(0.5);
            e.scale.setTo(.35);
            e.spawnX = e.x;
            e.animations.play('walk', 8, true);
        });
    });
    enemies.exists = false;

    //La Morte
    morte = game.add.sprite(25200, 1900, 'morte_w_i');
    morte.animations.add('morte_walk', [0, 1, 2, 3, 4, 5, 6, 7]);
    morte.animations.add('morte_idle', [8, 9, 10, 11, 12, 13, 14, 15]);
    morte.animations.play('morte_idle', 6, true);
    morte.anchor.setTo(0.5);
    game.physics.arcade.enable(morte);
    morte.body.collideWorldBounds = true;
    morte.body.gravity.y = 500;
    morte.scale.x = -1;

    morte.lives = viteMorte;
    morte.bloccata = true;
    morte.spawnX = morte.x;

    barra_vita_grp = game.add.group();
    barra_vita_grp.create(0, 0, 'barra_morte_back');
    barra_vita = barra_vita_grp.create(0, 0, 'barra_morte');
    barra_vita_grp.y = morte.y - 110;
    barra_vita_grp.visible = false;
    barra_vita_grp.forEach(function (b) {
        b.anchor.setTo(0);
    })

    weapon_morte = game.add.weapon(10, 'morte_bullet');
    weapon_morte.trackSprite(morte, 0, -70, false);
    weapon_morte.trackOffset.x = -67;
    weapon_morte.addBulletAnimation("sparo", [0, 1], 12, true);

    weapon_morte.bullets.forEach(function (b) {
        b.scale.setTo(.5);
    });

    weapon_morte.bulletGravity.y = 20;
    weapon_morte.bulletRotateToVelocity = true;
    weapon_morte.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
    weapon_morte.fireRate = 1000;
    weapon_morte.fireRateVariance = 100;
    weapon_morte.bloccata = true;
    weapon_morte.appenaFired = false;

    //Comandi
    game.input.mouse.capture = true;
    keys = game.input.keyboard.addKeys({
        jump: Phaser.Keyboard.SPACEBAR,
        left: Phaser.Keyboard.A,
        right: Phaser.Keyboard.D,
        up: Phaser.Keyboard.W,
        down: Phaser.Keyboard.S,
        esc: Phaser.Keyboard.ESC
    });
    fireButton = game.input.activePointer.leftButton;

    //Speranze
    speranze = game.add.physicsGroup();
    speranze.create(200, 1750, 'speranza_b');
    speranze.create(5900, 900, 'speranza_b');
    speranze.create(11580, 2100, 'speranza_b');
    speranze.create(12550, 2875, 'speranza_b');
    speranze.create(17300, 1100, 'speranza_b');
    speranze.create(21800, 1175, 'speranza_b');

    speranze.forEach(function (spe) {
        spe.animations.add('muovi');
        spe.animations.play('muovi', 8, true);
        spe.body.setSize(41, 41, 33, 42);
        spe.spawnY = spe.body.y;
    });

    //Checkpoint - Mali Grossi
    cps = game.add.physicsGroup();
    cps.create(8050, 1950, 'male_a');
    cps.create(16100, 1950, 'male_a');
    cps.create(22400, 1950, 'male_a');

    cps.forEach(function (c) {
        c.animations.add('muovi');
        c.animations.play('muovi', 8, true);
        c.anchor.setTo(0.5);
    });
    //Emitter di particelle
    foglie = game.add.emitter(17200, 1300, 200);
    foglie.makeParticles('leaf', [0, 1, 2]);
    foglie.gravity = 150;
    foglie.minParticleSpeed.setTo(-100, -30);
    foglie.maxParticleSpeed.setTo(-200 - 100);
    foglie.minParticleScale = 1.2;
    foglie.maxParticleScale = 2.5;
    foglie.flow(6000, 700, 2, -1);
    foglie.on = false;

    //Elementi in primo piano
    game.world.bringToTop(weapon);
    game.world.bringToTop(player);
    game.world.bringToTop(cuori_grp);
    game.world.bringToTop(spe_label);

    //Dialogo Finale
    dialog_grp = game.add.group();

    dialogo = dialog_grp.create(512, 400, 't_1_1');
    opz_1 = dialog_grp.create(512 - (325 / 2), 475, 'opz_1');
    opz_2 = dialog_grp.create(512 + (325 / 2), 475, 'opz_2_1');
    freccia_nera = dialog_grp.create(512 + (325 / 2), 425, 'freccia_nera');

    dialog_grp.visible = false;
    dialog_grp.fixedToCamera = true;
    dialogo.inputEnabled = true;
    opz_1.inputEnabled = true;
    opz_2.inputEnabled = true;
    freccia_nera.inputEnabled = true;

    opz_1.events.onInputDown.add(scontro_morte);
    //opz_2 cambia in base al contesto
    freccia_nera.events.onInputDown.add(avanza_dialogo);

    dialog_grp.forEach(function (d) { d.anchor.setTo(0.5, 1); })

    //immagine --> Tutte le immagini fisse
    immagine = game.add.sprite(0, 0, 'copertina');
    immagine.fixedToCamera = true;
    immagine.visible = true;
    //Supergruppo bottoni
    all_btns = game.add.group();
    //Copertina
    cop_btns = game.add.group();
    cop_gioca = cop_btns.create(277, 700, 'cop_gioca');
    cop_storia = cop_btns.create(512, 700, 'cop_storia');
    cop_crediti = cop_btns.create(752, 700, 'cop_crediti');
    cop_storia.events.onInputDown.add(apri_storia);
    cop_crediti.events.onInputDown.add(apri_crediti);
    cop_gioca.events.onInputDown.add(apri_gioco);

    //Storia
    var n_sto = 1;
    sto_btns = game.add.group();
    freccia_sx = sto_btns.create(50, 700, 'freccia_sx');
    freccia_dx = sto_btns.create(974, 700, 'freccia_dx');
    freccia_sx.events.onInputDown.add(indietro_storia);
    freccia_dx.events.onInputDown.add(avanza_storia);

    //Home Button
    home_btn = game.add.sprite(50, 87, 'freccia_sx');
    home_btn.anchor.setTo(.5);
    home_btn.visible = false;
    home_btn.fixedToCamera = true;
    home_btn.inputEnabled = true;
    home_btn.events.onInputDown.add(torna_home);

    //Pausa - uno dei due non serve
    pausa_btns = game.add.group();
    pausa_new = pausa_btns.create(512, 210, 'pausa_esci');

    pausa_new.events.onInputDown.add(refresh);

    //Respawn 
    dead_btns = game.add.group();
    continua_btn = dead_btns.create(512, 350, 'continua_btn');
    continua_btn.events.onInputDown.add(respawn);

    all_btns.add(sto_btns);
    all_btns.add(cop_btns);
    all_btns.add(pausa_btns);
    all_btns.add(dead_btns);

    all_btns.forEach(function (btn_grp) {
        btn_grp.fixedToCamera = true;
        btn_grp.visible = false;
        btn_grp.forEach(function (btn) {
            btn.anchor.setTo(0.5);
            btn.inputEnabled = true;
        });
    });

    cop_btns.visible = true;
    cop_btns.tint = 0xE9D200;

    //Posso aprire il menu pausa sono durante il gioco
    if (gameStart)
        keys.esc.onDown.add(apri_pausa, this);

    function apri_pausa() {
        if (gameStart) {
            console.log('pausa');
            immagine.loadTexture('pausa_img');
            immagine.visible = true;
            pausa_btns.visible = true;
            pausa = true;
            enemies.exists = false; //Fermo Nemici
            player.body.velocity.x = 0; //Fermo Player (se no scivola all'infinito)
            keys.esc.onDown.remove(apri_pausa, this);
            keys.esc.onDown.add(chiudi_pausa, this);
        }
    }

    function chiudi_pausa() {
        if (gameStart) {
            console.log('chiudo');
            pausa_btns.visible = false;
            immagine.visible = false;
            pausa = false;
            enemies.exists = true;
            keys.esc.onDown.remove(chiudi_pausa, this);
            keys.esc.onDown.add(apri_pausa, this);
        }
    }

    function refresh() { location.reload(); }

    function torna_home() {
        console.log('home');
        immagine.loadTexture('copertina');
        sto_btns.visible = false;
        home_btn.visible = false;
        pausa_btns.visible = false;
        cop_btns.visible = true;
        gameStart = false;
        pausa = true;
        document.body.style.backgroundImage = "url('assets/html/Background/square_storia.png')";
    }

    function apri_storia() {
        console.log('storia');
        sto_btns.visible = true;
        cop_btns.visible = false;
        n_sto = 1;
        freccia_home();
        immagine.loadTexture('render_' + n_sto);
        document.body.style.backgroundImage = "url('assets/html/Background/square_storia.png')";
    }

    function avanza_storia() {
        n_sto++;
        freccia_home();
        console.log(n_sto);
        if (n_sto <= 6) immagine.loadTexture('render_' + n_sto);
        else if (n_sto == 7) apri_gioco();
    }

    function indietro_storia() {
        n_sto--;
        freccia_home();
        console.log(n_sto);
        if (n_sto > 0) immagine.loadTexture('render_' + n_sto);
        else if (n_sto == 0) n_sto = 1;
    }

    function freccia_home() {
        if (n_sto == 1) {
            freccia_sx.events.onInputDown.remove(indietro_storia);
            freccia_sx.events.onInputDown.add(torna_home);
        }
        else {
            freccia_sx.events.onInputDown.remove(torna_home);
            freccia_sx.events.onInputDown.add(indietro_storia);
        }
    }

    function apri_crediti() {
        console.log('crediti');
        immagine.loadTexture('crediti');
        cop_btns.visible = false;
        home_btn.visible = true;
        document.body.style.backgroundImage = "url('assets/html/Background/square_cred.png')";
    }

    function apri_gioco() {
        console.log('gioco');
        immagine.visible = false;
        cop_btns.visible = false;
        sto_btns.visible = false;
        home_btn.visible = false;
        gameStart = true;
        chiudi_pausa();
    }

} //Fine Create

function update() {
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();

    game.physics.arcade.collide(player, grounds);
    game.physics.arcade.collide(enemies, grounds);
    game.physics.arcade.collide(morte, grounds);
    game.physics.arcade.collide(spinto, grounds);
    game.physics.arcade.collide(spinto, platforms);
    game.physics.arcade.collide(enemies, platforms);
    //Oggetti che scompaiono
    game.physics.arcade.collide(player, c2, scompare_obj);
    game.physics.arcade.collide(player, pb1, scompare_obj);
    game.physics.arcade.collide(player, pb2, scompare_obj);
    game.physics.arcade.collide(player, pb3, scompare_obj);
    //Stanno dopo se no gli obj speciali non scompaiono
    platforms.forEach(function (p) {
        game.physics.arcade.collide(player, p);
        game.physics.arcade.collide(vasi, p);
    });
    rami.forEach(function (ramo) {
        game.physics.arcade.collide(player, ramo);
        game.physics.arcade.collide(vasi, ramo);
    });
    game.physics.arcade.collide(player, colonne);
    game.physics.arcade.collide(player, colonne_ed);
    enemies.forEach(function (e) {
        game.physics.arcade.overlap(player, e, hit);
        e.forEach(function (en) {
            game.physics.arcade.overlap(weapon.bullets, en, danno_nemico);
        });
    });
    game.physics.arcade.overlap(player, cuori_singoli, guada_cuore);
    game.physics.arcade.overlap(weapon.bullets, stalats, cade_stalat);
    game.physics.arcade.collide(weapon.bullets, platforms, b_kill);
    game.physics.arcade.collide(weapon.bullets, grounds, b_kill);
    game.physics.arcade.collide(weapon.bullets, colonne, b_kill);
    game.physics.arcade.collide(weapon.bullets, colonne_ed, b_kill);
    game.physics.arcade.overlap(weapon.bullets, vasi, v_kill);
    game.physics.arcade.overlap(morte, weapon.bullets, morte_hit);
    game.physics.arcade.overlap(player, weapon_morte.bullets, hit_bullet);
    game.physics.arcade.collide(player, lance, hit_lance);
    game.physics.arcade.collide(vasi, grounds);
    game.physics.arcade.overlap(player, speranze, glowing);
    game.physics.arcade.overlap(player, cps, salva);
    game.physics.arcade.collide(player, spinto, muovi_spinto);

    //Funzioni da eseguire continuamente
    glow.rotation = game.physics.arcade.angleToPointer(player); //Angolo di sparo
    var angle_sparo_morte = game.physics.arcade.angleBetween(weapon_morte, player); //Angolo di sparo morte
    croppa(); //Crop dei cuori
    //Colorare i bottoni in hover
    dead_btns.forEach(coloraBtnBG);
    cop_btns.forEach(coloraBtnGB);
    coloraBtnBG(home_btn);
    coloraBtnBG(opz_1);
    //Bottone per refresh cambia contestualmente
    if (final == "null") pausa_btns.forEach(coloraBtnBG);
    else if (final != "bad")
        if (pausa_new.input.pointerOver()) pausa_new.loadTexture('esci_giallo');
        else pausa_new.loadTexture('esci_nero');
    else
        if (pausa_new.input.pointerOver()) pausa_new.loadTexture('esci_giallo');
        else pausa_new.loadTexture('esci');

    if (quale_dia != 1) coloraBtnBG(opz_2);
    //Freccia dx riusata nel render di GameOver
    if (!scontro_finale) sto_btns.forEach(coloraBtnBG);
    else if (freccia_dx.input.pointerOver()) freccia_dx.loadTexture('freccia_dx_gialla');
    else freccia_dx.loadTexture('freccia_dx_nera');
    //Cambio colore di freccia scorrimento dialogo
    if (freccia_nera.input.pointerOver()) freccia_nera.loadTexture('freccia_gialla');
    else freccia_nera.loadTexture('freccia_nera');

    //Quando si muove il giocatore
    if (!pausa) {
        //Deadzone della camera dinamica
        if (!scontro_finale) {
            if (player.y < 1550) game.camera.deadzone = new Phaser.Rectangle(150, 150, 100, 100);
            else game.camera.deadzone = new Phaser.Rectangle(150, 150, 100, 500);
        }
        //Scorrimento parallassi
        this.fr_dietro.tilePosition.x = -(game.camera.x * 0.05);
        this.fr_davanti.tilePosition.x = -(game.camera.x * 0.1);
        this.par_grotta_dietro.tilePosition.x = -(game.camera.x * 0.2);
        this.par_grotta_davanti.tilePosition.x = -(game.camera.x * 0.3);
        this.par_grotta_soffitto.tilePosition.x = -(game.camera.x * 0.2);
        this.par_grotta_soffitto_2.tilePosition.x = -(game.camera.x * 0.2);
        this.par_grotta_soffitto_3.tilePosition.x = -(game.camera.x * 0.2);
        //Faccio scorrere il bosco solo quando ci arrivo perchè non è un tile
        if (player.x > 15500) {
            this.par_bosco_dietro.x = -(game.camera.x * 0.1) + 15000;
            this.par_bosco_davanti.x = -(game.camera.x * 0.2) + 15000;
        }

        enemies.forEach(function (e) { e.forEach(e_muovi); }); //Muovo nemici
        colonne_ed.forEach(arrampicata); //Triggero arrampicabilità colonne
        //Gestione dei massi da spingere
        spinto.forEach(function (s) {
            s.body.velocity.x = 0;
            if (!s.body.touching.down) cade_spinto(s); //è possibile buttare i massi giù dai burroni
            if (s.y > ground_y) player.spinge = false;
        });

        //Leggero scivolamneto del player
        player.body.velocity.x = player.body.velocity.x * 0.85;
        player.body.gravity.y = 500;

        //Abbrevio la condizione di tocco
        if (player.body.onFloor() || player.body.touching.down) player.tocca = true;
        else player.tocca = false;

        //Framerate varia e accendo emitter nel bosco 
        if (player.x < 16200 || player.x > 22000) {
            foglie.on = false;
            player.frameRate = 12;
        }
        else {
            foglie.on = true;
            foglie.x = player.body.x + 1000;
            foglie.y = player.body.y - 700;
            player.frameRate = 8;
        }

        //Controlli
        if (!player.bloccato) {
            if (keys.left.isDown) {
                if (player.x < 16200 || player.x > 22000) player.body.velocity.x = -250;
                else player.body.velocity.x = -200;
                player.scale.x = -1;
                cammina();
            }
            else if (keys.right.isDown) {
                if (player.x < 16200 || player.x > 22000) player.body.velocity.x = 250;
                else player.body.velocity.x = 200;
                player.scale.x = 1;
                cammina();
            }
            //Idle
            else if (player.tocca) {
                player.moving = false;
                game.time.events.add(300, function () { player.cade = false; }, this);
                player.salto = false;
                if (!weapon.appenaFired) idle();
            }
            //Salto
            if (keys.jump.isDown && player.tocca) {
                if (player.x < 16200 || player.x > 22000) player.body.velocity.y = -425;
                else player.body.velocity.y = -350;
                player.salto = true;
                player.cade = true;
                player.idle = false;
                player.animations.play('player_jump', player.frameRate, false);
                player.body.setSize(60, 112, 34, 00);
            }
            //Caduta
            if (!player.tocca && player.body.velocity.y > 0 && !player.cade && !player.salto && !player.idle)
                caduta();
            //Arma
            if (fireButton.isDown && !weapon.bloccata) {
                weapon.bulletGravity.y = 20;
                weapon.fireAngle = glow.angle;
                weapon.bulletSpeed = 500;
                weapon.bulletSpeedVariance = 100;
                if (weapon.fire() && !player.moving) {
                    player.animations.play('player_boi', player.frameRate * 2, false);
                    weapon.appenaFired = true;
                    game.time.events.add(500, function () { weapon.appenaFired = false; }, this);
                }
            }
        }

        //Piattaforma che fa su e giù
        if (plat_mossa1.y < 1400) plat_mossa1.body.velocity.y = 100;
        else if (plat_mossa1.y >= 1900) plat_mossa1.body.velocity.y = -100;

        //Faccio apparire i testi del tutorial - ottimizzabile
        if ((player.x - c_muovi.x) ** 2 + (player.y - c_muovi.y) ** 2 < 80 ** 2) game.add.tween(t_muovi).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(t_muovi).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - c_salto.x) ** 2 + (player.y - c_salto.y) ** 2 < 80 ** 2) game.add.tween(t_salto).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(t_salto).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - c_sparo.x) ** 2 + (player.y - c_sparo.y) ** 2 < 80 ** 2) game.add.tween(t_sparo).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(t_sparo).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - c_arra.x) ** 2 + (player.y - c_arra.y) ** 2 < 80 ** 2) game.add.tween(t_arra).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(t_arra).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - indo_1.x) ** 2 + (player.y - indo_1.y) ** 2 < 80 ** 2) game.add.tween(i_1).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(i_1).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - indo_2.x) ** 2 + (player.y - indo_2.y) ** 2 < 80 ** 2) game.add.tween(i_2).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(i_2).to({ alpha: 0 }, 100, "Bounce", true);

        if ((player.x - indo_3.x) ** 2 + (player.y - indo_3.y) ** 2 < 80 ** 2) game.add.tween(i_3).to({ alpha: 1 }, 400, "Linear", true);
        else game.add.tween(i_3).to({ alpha: 0 }, 100, "Bounce", true);

        //Trigger terremoto
        if (player.body.touching.down && player.y == 1945 && player.x < 7900 && player.x > 7600 && !terremoto) {
            game.camera.shake(0.005, 3000, true, Phaser.Camera.SHAKE_VERTICAL, true);
            game.time.events.add(750, terremoto_start, this);
        }

        //Spawn Nemico nella grotta
        if (!e_p_spawn.alive) {
            game.time.events.add(3000, function () {
                e_p_spawn.revive(14330, 2960);
                e_p_spawn.animations.play('walk', 8, true);
            }, this);
            e_p_spawn.lives = 2;
            e_p_spawn.giahit = false;
        }

        //Crollo Stele secondo livello
        if (player.x > 14500 && !crollo_stele && player.lives == 1) {
            game.camera.shake(0.005, 3000, true, Phaser.Camera.SHAKE_VERTICAL, true);
            game.time.events.add(750, crollo_start, this);
        }

        //Ascensore
        if (!scontro_finale) {
            if (player.body.touching.down && player.x > 15500 && player.x < 16500 && !ascensore.salito) {
                //Cambio deadzone per non inquadrare sotto al pavimento una volta salito in cima
                game.camera.deadzone = new Phaser.Rectangle(150, 668, 100, 50);
                ascensore.body.velocity.y = -180;
                player.bloccato = true;
                idle();
            }
            if (Math.round(ascensore.y) === ground_y + this.game.cache.getImage('plat_2_g').height + 3 && !ascensore.salito) {
                ascensore.body.velocity.y = 0;
                ascensore.salito = true;
                player.bloccato = false;
            }
        }

        //Danno caduta nel buco
        if (player.x > 16000 && player.y > ground_y - player.height / 3)
            hit_buco(player);

        //Attivo Dialogo
        if (game.physics.arcade.distanceBetween(morte, player) < 600 && !scontro_finale) {
            idle();
            if (player.speranze > 0) morte.maxLives = viteMorte / player.speranze;
            else morte.maxLives = viteMorte;

            morte.lives = morte.maxLives;
            player.bloccato = true;
            scontro_finale = true;
            dialog_grp.visible = true;
            opz_1.visible = false;
            opz_2.visible = false;
            n_dia = 0;
            //Opzioni di dialogo in base a speranze raccolte
            if (player.speranze != 6) quale_dia = 1;
            else quale_dia = 2;
            avanza_dialogo();
            dialogo.events.onInputDown.add(avanza_dialogo);
        }

        //Distanza x tra morte e player
        var dx = player.x - morte.x;

        //Inizia lo scontro
        if (scontro_finale) {
            if (!morte.bloccata) {
                //Morte rivolta in direzione del player e offset del punto di sparo dell'arma
                if (final != 'good')
                    if (morte.body.x > player.body.x) {
                        morte.scale.x = -1;
                        weapon_morte.trackOffset.x = -67;
                    }
                    else if (morte.body.x < player.body.x) {
                        morte.scale.x = 1;
                        weapon_morte.trackOffset.x = 67;
                    }

                //Morte cammmina verso il player fino 200px di distanza
                if (morte.body.x > player.body.x + 200) {
                    morte.body.velocity.x = -75;
                    morte.animations.play('morte_walk', 8, true);
                }
                else if (morte.body.x < player.body.x - 200) {
                    morte.body.velocity.x = 75;
                    morte.animations.play('morte_walk', 8, true);
                    //Cambio dinamico deadzone per mantenere sempre il player e la morte visibili 
                    game.camera.deadzone = new Phaser.Rectangle(150, 100, 100 + dx, 550);
                } else {
                    morte.body.velocity.x = 0;
                    morte.animations.stop('morte_walk');
                    morte.animations.play('morte_idle', 6, true);
                }
            }
        }

        //Tracking barra della vita
        barra_vita_grp.x = morte.body.x + 20;

        //Morte spara
        if (!weapon_morte.bloccata) {
            weapon_morte.bulletGravity.y = 20;
            weapon_morte.bulletSpeed = 500;
            weapon_morte.bulletSpeedVariance = 100;
            weapon_morte.fireAngle = game.math.radToDeg(angle_sparo_morte);
            //Turnaround sul problema che i primi proiettili vengono sparati con un angolo opposto
            if (weapon_morte.shots < 2) weapon_morte.bullets.visible = false;
            else weapon_morte.bullets.visible = true;
            weapon_morte.fire();
        }

        //Cambio Pattern Sfondo
        if (final == "null")
            if (player.y > ground_y)
                document.body.style.backgroundImage = "url('assets/html/Background/square2.png')";
            else if (player.y < ground_y && player.x > 15500 && player.x < 22500)
                document.body.style.backgroundImage = "url('assets/html/Background/square3.png')";
            else if (player.y < ground_y && player.x > 22500)
                document.body.style.backgroundImage = "url('assets/html/Background/square4.png')";
            else
                document.body.style.backgroundImage = "url('assets/html/Background/square.png')";
    }
} //Fine Update

function avanza_dialogo() {
    //Numero di slide da scorrere in base al dialogo
    var max_dia = 0;
    switch (quale_dia) {
        case 1:
            max_dia = 3;
            break;
        case 2:
            max_dia = 2;
            break;
        case 3:
            max_dia = 7;
            break;
        default:
            max_dia = 0;
    }
    //Scorrimento dialogo
    if (n_dia < max_dia) {
        n_dia++
        dialogo.loadTexture('t_' + quale_dia + '_' + n_dia);
    }
    //Fine dialogo 1 --> opz_2 bloccata
    if (quale_dia == 1 && n_dia == 3) {
        opz_1.visible = true;
        opz_2.visible = true;
        freccia_nera.visible = false;
        opz_2.inputEnabled = false;
        opz_2.tint = 0xAAAAAA;
    }
    //Fine dialogo 2 --> Entrambe le opzioni
    if (quale_dia == 2 && n_dia == 2) {
        opz_1.visible = true;
        opz_2.visible = true;
        freccia_nera.visible = false;
        opz_2.loadTexture('opz_2_2');
        dialogo.events.onInputDown.remove(avanza_dialogo);
        opz_2.events.onInputDown.add(avanza_dialogo);
        n_dia = 0;
        quale_dia = 3;
    }
    //Dialogo 3
    if (quale_dia == 3 && n_dia > 0) {
        opz_1.visible = false;
        opz_2.visible = false;
        freccia_nera.visible = true;
        dialogo.events.onInputDown.add(avanza_dialogo);
    }
    //Fine dialogo 3 --> Vittoria Rapida
    if (quale_dia == 3 && n_dia == 7) {
        freccia_nera.visible = false;
        dialogo.events.onInputDown.remove(avanza_dialogo);
        game.time.events.add(2000, vittoria_rapida, this);
    }
}

function scontro_morte() {
    //Appare vita morte e i personaggi si sbloccano
    player.bloccato = false;
    dialog_grp.visible = false;
    morte.bloccata = false;
    stele_l.visible = true;
    barra_vita_grp.visible = true;
    game.time.events.add(1000, function () { weapon_morte.bloccata = false; }, this);
}

function vittoria_rapida() {
    gameStart = false;
    final = 'good';
    console.log("Finale " + final);
    morte.scale.x = 1;
    morte.body.velocity.x = 75;
    morte.animations.play('morte_walk', 8, true);
    game.camera.fade(0xF9F9F9, 3000);
    document.body.style.backgroundImage = "url('assets/html/Background/square_" + final + ".png')";
    game.time.events.add(4000, caricaGameOver, this);
}

function vittoria_med() {
    console.log("Finale " + final);
    gameStart = false;
    weapon_morte.bloccata = true;
    morte.bloccata = true;
    morte.scale.x = 1;
    morte.body.velocity.x = 75;
    morte.animations.play('morte_walk', 8, true);
    game.camera.fade(0xC1C1C1, 3000);
    document.body.style.backgroundImage = "url('assets/html/Background/square_" + final + ".png')";
    game.time.events.add(4000, caricaGameOver, this);
}

function sconfitta() {
    console.log("Finale " + final);
    gameStart = false;
    weapon_morte.bloccata = true;
    morte.bloccata = true;
    game.camera.fade(0x000000, 3000);
    document.body.style.backgroundImage = "url('assets/html/Background/square_storia.png')";
    game.time.events.add(4000, caricaGameOver, this);
}

function caricaGameOver() {
    game.camera.resetFX();
    immagine.loadTexture('finale_' + final);
    immagine.visible = true;
    sto_btns.visible = true;
    freccia_sx.visible = false;
    freccia_dx.loadTexture('freccia_dx_nera');
    freccia_dx.events.onInputDown.add(apri_testo_finale);
}

function apri_testo_finale() {
    immagine.loadTexture('testo_' + final);
    pausa_btns.visible = true;
    freccia_dx.visible = false;
    pausa_new.y = 500;
}

function coloraBtnGB(b) {
    if (b.input.pointerOver()) b.tint = 0xFFFFFF;
    else b.tint = 0xE9D200;
}

function coloraBtnBG(b) {
    if (b.input.pointerOver()) b.tint = 0xE9D200;
    else b.tint = 0xFFFFFF;
}

function croppa() {
    cropRect = new Phaser.Rectangle(0, 0, (420 / 10) * (player.lives), cuori.height);
    cuori.crop(cropRect);
    cropRect_spe = new Phaser.Rectangle(0, 0, (423 / 10) * (player.speranze), spe_label.height);
    spe_label.crop(cropRect_spe);
    cropRect_morte = new Phaser.Rectangle(0, 0, (120 / morte.maxLives) * (morte.lives), barra_vita.height);
    barra_vita.crop(cropRect_morte);
}

function cammina() {
    player.moving = true;

    if (player.tocca) {
        game.time.events.add(200, function () { player.cade = false; }, this);
        player.idle = false;
        player.salto = false;
        if (player.spinge) {
            player.animations.play('player_push', player.frameRate - 2, true);
            player.body.setSize(56, 100, 30, 12);
        } else {
            player.animations.play('player_walk', player.frameRate, true);
            player.body.setSize(54, 100, 37, 12);
        }
    }
    else if (!player.salto && !player.cade) caduta();
}

function caduta() {
    player.cade = true;
    player.salto = false;
    player.animations.play('player_fall', player.frameRate, false);
    player.body.setSize(60, 112, 34, 00);
}

function idle() {
    player.idle = true;
    player.animations.play('player_idle', 10, true);
    player.body.setSize(50, 100, 39, 12);
}

function arrampicata(col) {
    var offset2 = 0
    if (col.x == 12100) col.offset = 0;
    else if (col.x == 19800) {
        col.offset = -750 //Negativo
        offset2 = 325 //Positivo
    }
    else col.offset = this.game.cache.getImage('plat_ed').height

    //Salita - Il  Player non può salire oltre l'altezza della colonna
    if (keys.up.isDown && ((player.x - col.x) ** 2 < 900) && player.y > (col.y - col.height - (player.height / 2) - col.offset) && col.y > player.y) {
        player.y -= 5;
        arr();
    }
    //Discesa
    if (keys.down.isDown && ((player.x - col.x) ** 2 <= 900) && player.y < (col.y - player.height + 1 - offset2) && player.y < col.y) {
        player.y += 5;
        arr();
    }

    function arr() {
        player.body.gravity.y = 0;
        player.body.velocity.y = 0;
        player.animations.play('player_climb', player.frameRate, true);
        player.cade = false;
        player.salto = false;
        player.body.setSize(50, 112, 39, 00);
    }

}

function muovi_spinto(p, s) {
    if (p.body.touching.left && s.body.touching.right || p.body.touching.right && s.body.touching.left) {
        player.spinge = true;
        s.body.immovable = true;
        s.body.gravity.y = 0;
        s.body.velocity.x = p.body.velocity.x;
    }
    else if (!s.body.touching.down) {
        player.spinge = false;
        cade_spinto(s);
    }
    else player.spinge = false;
}

function cade_spinto(s) {
    s.body.immovable = false;
    s.body.velocity.x = 0;
    s.body.gravity.y = 100;
}

function e_muovi(enemy) {
    var r = Math.random();
    if (r < 0.3) r = 1;

    if (enemy.lives > 0)
        if (enemy.body.x > enemy.spawnX + r * 300) {
            enemy.body.velocity.x = -50;
            if (enemy.scale.x > 0) enemy.scale.x = - enemy.scale.x;
            else enemy.scale.x = enemy.scale.x;
        }
        else if (enemy.body.x < enemy.spawnX - r * 20) {
            enemy.body.velocity.x = 50;
            if (enemy.scale.x > 0) enemy.scale.x = enemy.scale.x;
            else enemy.scale.x = - enemy.scale.x;
        }
}

function hit_buco(p) {
    togli_vita(p);
    p.x = spawn_x;
    p.y = spawn_y;
}

function hit_lance(p, l) {
    //Spawn point per la morte da lance
    if (spawn_x < l.x) {
        if (l.x > 1700 && l.x < 2750) {
            p.x = 1400;
            p.y = 1780;
        }
        else if (l.x > 3300 && l.x < 4600) {
            p.x = 3330;
            p.y = 1350;
        }
        else if (l.x > 4700 && l.x < 6510) {
            p.x = 5400;
            p.y = 1750;
        }
        else if (l.x > 7500 && l.x < 8500) {
            p.x = 7800;
            p.y = 950;
        }
        else if (l.x > 8700 && l.x < 10000) {
            p.x = 8650;
            p.y = 2840;
        }
        else if (l.x > 11430 && l.x < 12020) {
            p.x = 11400;
            p.y = 2840;
        }
        else if (l.x > 13300 && l.x < 14150) {
            p.x = 13250;
            p.y = 2740;
        }
        else if (l.x > 17700 && l.x < 18300) {
            p.x = 17300;
            p.y = 1945;
        }
        else if (l.x > 19700 && l.x < 21700) {
            p.x = 18900;
            p.y = 1740;
        }
        else {
            p.x = spawn_x;
            p.y = spawn_y;
        }
    }
    else {
        p.x = spawn_x;
        p.y = spawn_y;
    }
    togli_vita(p);
}

function cade_stalat(b, s) {
    b_kill(b);
    if (!s.hit) {
        s.hit = true
        s.body.gravity.y = 600;
        game.time.events.add(1400, function () { s.body.velocity.y = 0; s.body.gravity.y = 0; }, this);
    }
}

function hit_bullet(p, b) {
    b.kill();
    togli_vita(p);
}

function hit(p, e) {
    if (!e.giahit && !p.morto) {
        e.giahit = true;
        togli_vita(p);
        game.time.events.add(1000, noHit, this, e);
    }
}

function morte_hit(m, b) {
    if (scontro_finale) {
        b_kill(b);
        m.lives--;
        coloraRosso(m)
        if (m.lives == 0 && final != 'bad') {
            final = 'med';
            vittoria_med();
        }
    }
}

function togli_vita(p) {
    p.lives--;
    if (!scontro_finale || p.lives >= 1) {
        p.alpha = 0.5;
        game.time.events.add(1000, function () { p.alpha = 1 }, this);
    }
    if (p.lives < 1) {
        p.alpha = 1;
        morte_player(p);
    }
    if (stele.alive) stele.animations.play(p.lives, 10, false);
}

function noHit(e) {
    e.giahit = false;
    player.alpha = 1;
}

function morte_player(p) {
    //Animazione Morte
    console.log("Morto");
    p.bloccato = true;
    if (!p.morto && final != "med") {
        p.animations.play('player_die', 12, false);
        p.morto = true;
    }
    if (!scontro_finale) {
        game.time.events.add(2000, function () {
            immagine.visible = true;
            immagine.loadTexture('render_morte');
            gameStart = false;
            dead_btns.visible = true;
        }, this);
    }
    else if (final != 'med') {
        final = 'bad';
        sconfitta();
    }
}

function respawn() {
    gameStart = true;
    immagine.visible = false;
    dead_btns.visible = false;
    player.x = spawn_x;
    player.y = spawn_y;
    player.lives = maxLives;
    player.tint = 0xFFFFFF;
    player.bloccato = false;
    player.spinge = false;
    player.morto = false;
}

function danno_nemico(e, b) {
    e.lives--;
    if (e.lives > 0) coloraRosso(e);

    if (e.lives == 0) {
        e.tint = 0xFFFFFF;
        e.animations.stop("walk");
        e.animations.play("morte", 12, false);
        e.giahit = true;
        game.time.events.add(1000, function () { e.kill() }, this);
    }
    b_kill(b);
}

function coloraRosso(e) {
    e.tint = 0xFF0000;
    game.time.events.add(200, function () { e.tint = 0xFFFFFF; }, this);
}

function b_kill(b) {
    b.kill();
    weapon.bloccata = true;
    //Delay prima di poter sparare un nuovo proiettile
    game.time.events.add(500, function () { weapon.bloccata = false }, this);
}

function v_kill(b, v) {
    if (!v.rotto) {
        b_kill(b);
        v.animations.play("break", 12, false);
        c_crea(v);
        v.rotto = true;
    }
}

function c_crea(v) {
    //Funzione per poter eventualmente decidere quali vasi producano quanti cuori
    if (v.x != 10850) cuori_singoli.create(v.x - 20, v.y - 70, 'heart');
}

function guada_cuore(p, c) {
    if (p.lives < 6) {
        c.kill();
        p.lives++;
    }
}

function salva(p, c) {
    c.kill();
    spawn_x = c.body.x;
    spawn_y = c.body.y;
}

function glowing(p, s) {
    s.kill();
    p.speranze++;
    glow.animations.play('glow', 8, true);
    glow.alpha = p.speranze / 6;
    spe_label.frame = p.speranze;
}

function scompare_obj(p, c) {
    game.add.tween(c).to({ alpha: 0 }, 300, "Bounce", true);
    game.time.events.add(300, annulla_obj, this, c);

    function annulla_obj(c) {
        c.body.enable = false;
        game.time.events.add(1000, appare_obj, this, c);
    }
    function appare_obj(c) {
        game.add.tween(c).to({ alpha: 1 }, 300, "Bounce", true);
        c.body.enable = true;
    }
}

function terremoto_start() {
    terremoto = true;
    pav_crolla.kill();
}

function crollo_start() {
    crollo_stele = true;
    //animazione crollo stele
    stele.animations.play('crolla', 6, false);
    //uccido stele ad animazione finita
    game.time.events.add(1500, function () { stele.kill(); }, this);
}

function render() {

}