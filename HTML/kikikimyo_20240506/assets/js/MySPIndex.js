class MySPIndex extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <div>
      <ul class="navbar-nav me-auto mb-5 flex-column">
        <li class="nav-item mb-4">
          <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="sample1.html#explanation_top" onclick="modalClose()">シナリオ表記スタイル</a>
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="sample1.html#explanation_01" onclick="modalClose()">表記ルール</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-1" onclick="modalClose()">基本テキスト</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-2" onclick="modalClose()">技能判定</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="sample1.html#explanation_01-3" onclick="modalClose()">描写へジャンプ</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item mb-4">
          <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_info.html#info_top" onclick="modalClose()">シナリオ概要</a>
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_01" onclick="modalClose()">あらすじ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_02" onclick="modalClose()">シナリオ概要</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-1" onclick="modalClose()">公開ハンドアウト</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-2" onclick="modalClose()">使用ルルブ/サプリ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_info.html#info_02-3" onclick="modalClose()">難易度設定</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_03" onclick="modalClose()">注意事項</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_04" onclick="modalClose()">参考作品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_05" onclick="modalClose()">利用規約</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_info.html#info_06" onclick="modalClose()">権利表記</a>
            </li>
          </ul>
        </li>
        <li class="nav-item mb-4">
          <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_forKP.html#forKP_top" onclick="modalClose()">KP情報</a>
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_01" onclick="modalClose()">真相</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-1" onclick="modalClose()">（簡易版）</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-2" onclick="modalClose()">（時系列）</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-3" onclick="modalClose()">参考・引用文献の略記について</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-4" onclick="modalClose()">登場する神話生物</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_01-5" onclick="modalClose()">登場する呪文や書物など（直接登場しないものも含める）</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_02" onclick="modalClose()">主要NPC/神話生物</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_02-1" onclick="modalClose()">その他NPC</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_02-2" onclick="modalClose()">神話生物</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_03" onclick="modalClose()">秘匿ハンドアウト内容</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-1" onclick="modalClose()">HO1：愛煙家</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-2" onclick="modalClose()">HO2：嫌煙家</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_03-3" onclick="modalClose()">HOごとの特徴</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_forKP.html#forKP_04" onclick="modalClose()">ギミック</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_04-1" onclick="modalClose()">HO1：狂気の境</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_forKP.html#forKP_04-2" onclick="modalClose()">HO2：死の煙</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item mb-4">
          <a class="nav-link nav-link--chapter ps-2 ms-2 my-2" href="kikikimyo_scenario.html#main_top" onclick="modalClose()">シナリオ本文</a>
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_02" onclick="modalClose()">個別導入</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_02-1" onclick="modalClose()">HO2個別導入（秘匿）</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-1" onclick="modalClose()">HO2個別（秘匿）：葬儀屋での調査</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-2" onclick="modalClose()">HO2個別（秘匿）：噂を聞いて回る</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-1-3" onclick="modalClose()">HO2個別（秘匿）イベント：死の山</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_02-2" onclick="modalClose()">HO1個別導入（秘匿）</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-1" onclick="modalClose()">HO1個別（秘匿）：調合</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-2" onclick="modalClose()">HO1個別（秘匿）：円山の来訪</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_02-2-3" onclick="modalClose()">HO2個別（秘匿）：山の探索</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_03" onclick="modalClose()">本編</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-1" onclick="modalClose()">探索</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-1" onclick="modalClose()">【全探索箇所】</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-2" onclick="modalClose()">【追加探索箇所の発生条件】</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-3" onclick="modalClose()">居間</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-4" onclick="modalClose()">書斎</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-5" onclick="modalClose()">寺務所</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-6" onclick="modalClose()">寝室</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-7" onclick="modalClose()">蔵</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-8" onclick="modalClose()">寺周辺</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-9" onclick="modalClose()">山</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-1-10" onclick="modalClose()">洞窟入り口</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-2" onclick="modalClose()">HO1個別（秘匿）：鏡の世界</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-3" onclick="modalClose()">HO2個別（秘匿）：木明社</a>
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-1" onclick="modalClose()">HO2個別（秘匿）：虎落図書館</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-2" onclick="modalClose()">HO2個別（秘匿）：下水道</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link--item" href="kikikimyo_scenario.html#main_03-3-3" onclick="modalClose()">洞窟</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-4" onclick="modalClose()">イベント：心臓の探求-SEEKHEART</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-5" onclick="modalClose()">イベント：食屍鬼の襲来</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_03-6" onclick="modalClose()">イベント：山を降りる</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_scenario.html#main_04" onclick="modalClose()">エンディング</a>
              <ul class="navbar-nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-1" onclick="modalClose()">エンディング</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-2" onclick="modalClose()">HO1が食屍鬼につき、山に残る</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-3" onclick="modalClose()">無事に山を降りた</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-4" onclick="modalClose()">心臓のPOWを捧げず、二人で山を降りる</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link--paragraph" href="kikikimyo_scenario.html#main_04-5" onclick="modalClose()">HPまたはSANが0になる</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link--chapter ps-2 my-2 ms-2" href="kikikimyo_conclusion.html#conclusion_top" onclick="modalClose()">終わりに</a>
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_conclusion.html#conclusion_01" onclick="modalClose()">あとがき</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--section" href="kikikimyo_conclusion.html#conclusion_02" onclick="modalClose()">参考・引用文献</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
      `;
    }
  }
  
  customElements.define("my-sp-index", MySPIndex);