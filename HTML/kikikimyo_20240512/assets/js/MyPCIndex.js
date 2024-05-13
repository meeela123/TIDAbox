class MyPCIndex extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <nav class="navbar navbar-expand-md fixed-top navbar-light py-0">
          <div class="container-fluid px-1">
            <!-- mobile size modal button start-->
            <button class="navbar-toggler p-4 d-block d-md-none" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="ナビゲーションの切替">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- mobile size modal button end-->
            <!-- PCsize menu item start -->
            <div class="d-none d-md-block" id="navbar">
              <div class="navbar-subtitle mx-3 mt-4">きききみょう</div>
              <div class="mx-3 mb-4"><span class="navbar-title">鬼氛歸命</span></div>
              <ul class="navbar-nav me-auto mb-5 flex-column">
                <li class="nav-item mb-4">
                  <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="sample1.html#explanation_top">シナリオ表記スタイル</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="sample1.html#explanation_01">表記ルール</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-1">基本テキスト</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-2">技能判定</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-3">描写へジャンプ</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_info.html#info_top">シナリオ概要</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_01">あらすじ</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_02">シナリオ概要</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-1">公開ハンドアウト</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-2">使用ルルブ/サプリ</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-3">難易度設定</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_03">注意事項</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_04">参考作品</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_05">利用規約</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_06">権利表記</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_forKP.html#forKP_top">KP情報</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_01">真相</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-1">（簡易版）</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-2">（時系列）</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-3">参考・引用文献の略記について</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-4">登場する神話生物</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-5">登場する呪文や書物など（直接登場しないものも含める）</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_02">主要NPC/神話生物</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_02-1">その他NPC</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_02-2">神話生物</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_03">秘匿ハンドアウト内容</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-1">HO1：愛煙家</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-2">HO2：嫌煙家</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-3">HOごとの特徴</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_04">ギミック</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_04-1">HO1：狂気の境</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_04-2">HO2：死の煙</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item mb-4">
                  <a class="nav-link nav-link--chapter ps-2 ms-2 my-2" href="kikikimyo_scenario.html#main_top">シナリオ本文</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_02">個別導入</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_02-1">HO2個別導入（秘匿）</a>
                          <ul class="navbar-nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-1">HO2個別（秘匿）：葬儀屋での調査</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-2">HO2個別（秘匿）：噂を聞いて回る</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-3">HO2個別（秘匿）イベント：死の山</a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_02-2">HO1個別導入（秘匿）</a>
                          <ul class="navbar-nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-1">HO1個別（秘匿）：調合</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-2">HO1個別（秘匿）：円山の来訪</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-3">HO2個別（秘匿）：山の探索</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_03">本編</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-1">探索</a>
                          <ul class="navbar-nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-1">【全探索箇所】</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-2">【追加探索箇所の発生条件】</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-3">居間</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-4">書斎</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-5">寺務所</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-6">寝室</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-7">蔵</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-8">寺周辺</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-9">山</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-10">洞窟入り口</a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-2">HO1個別（秘匿）：鏡の世界</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-3">HO2個別（秘匿）：木明社</a>
                          <ul class="navbar-nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-1">HO2個別（秘匿）：虎落図書館</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-2">HO2個別（秘匿）：下水道</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-3">洞窟</a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-4">イベント：心臓の探求-SEEKHEART</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-5">イベント：食屍鬼の襲来</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-6">イベント：山を降りる</a>
                          <ul class="navbar-nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-6-scene1">ティンダロスの王</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-6-scene2">飽和する器</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_04">エンディング</a>
                      <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-1">エンディング</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-2">HO1が食屍鬼につき、山に残る</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-3">無事に山を降りた</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-4">心臓のPOWを捧げず、二人で山を降りる</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-5">HPまたはSANが0になる</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_conclusion.html#conclusion_top">終わりに</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_conclusion.html#conclusion_01">あとがき</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--section" href="kikikimyo_conclusion.html#conclusion_02">参考・引用文献</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define("my-pc-index", MyPCIndex);