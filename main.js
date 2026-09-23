(function() {
  // 6种体质数据
  var constitutions = {
    qixu: {
      name: '气虚质',
      emoji: '🌾',
      theme: 'theme-qixu',
      quote: '元气不足，需要好好给自己"充电"',
      tags: ['容易累', '说话声小', '爱出汗', '易感冒'],
      desc: '你就像一株需要滋养的麦穗，元气是你的能量源泉。稍微动一动就觉得累，说话声音也不大，容易出虚汗，换季时总比别人先感冒。别担心，通过饮食和作息慢慢调理，元气会一点点回来的。',
      tea: '黄芪红枣茶 — 黄芪5片+红枣3颗，沸水冲泡代茶饮',
      point: '足三里穴 — 膝盖外侧凹陷处往下四指宽，每天按揉3分钟',
      food: '山药、小米、南瓜、土豆、鸡肉、香菇、大枣',
      sleep: '晚上11点前入睡，中午午休20-30分钟，避免过度劳累',
      percent: 85,
      ratio: 18
    },
    yangxu: {
      name: '阳虚质',
      emoji: '🔥',
      theme: 'theme-yangxu',
      quote: '体内"小火炉"不够旺，需要多补阳气',
      tags: ['怕冷', '手脚凉', '喜热饮', '大便稀'],
      desc: '你就像一座火力不足的小火炉，总是觉得冷，手脚一年四季冰凉，喜欢喝热饮吃热的食物，大便常常不成形。阳气就像身体里的小太阳，需要好好呵护它，慢慢把火力养回来。',
      tea: '生姜桂圆茶 — 生姜3片+桂圆5颗，晨起一杯暖身',
      point: '关元穴 — 肚脐下四指宽处，每天用掌心捂热5分钟',
      food: '羊肉、韭菜、核桃、栗子、生姜、桂圆、荔枝',
      sleep: '早睡晚起，冬季尤其注意保暖，睡前热水泡脚20分钟',
      percent: 82,
      ratio: 15
    },
    yinxu: {
      name: '阴虚质',
      emoji: '💧',
      theme: 'theme-yinxu',
      quote: '体内津液不足，像一片需要雨露的土地',
      tags: ['口干', '手心热', '易失眠', '大便干'],
      desc: '你就像一片缺少雨水滋润的土地，总是觉得口干舌燥，手心脚心发热，晚上容易盗汗失眠，大便也偏干。阴虚的人要像给土地浇水一样，多给自己补充津液，少做消耗阴液的事。',
      tea: '枸杞麦冬茶 — 枸杞10粒+麦冬5粒，滋阴润燥',
      point: '三阴交穴 — 脚踝内侧往上四指宽处，每晚按揉3分钟',
      food: '银耳、百合、雪梨、鸭肉、黑芝麻、藕、蜂蜜',
      sleep: '晚上10点半前入睡，避免熬夜伤阴，午间小憩养阴',
      percent: 80,
      ratio: 16
    },
    tanshi: {
      name: '痰湿质',
      emoji: '☁️',
      theme: 'theme-tanshi',
      quote: '体内湿气重，像被云雾笼罩的小山峰',
      tags: ['身体重', '爱出油', '易发胖', '舌苔厚'],
      desc: '你就像被云雾笼罩的山峰，总觉得身体沉重发懒，脸上头发容易出油，肚子软软的容易发胖，舌头上面有一层厚厚的苔。痰湿体质需要给身体"祛湿消肿"，让云开雾散。',
      tea: '陈皮茯苓茶 — 陈皮1瓣+茯苓5克，健脾祛湿',
      point: '丰隆穴 — 小腿外侧中点，每天按揉祛湿化痰',
      food: '薏米、红豆、冬瓜、白萝卜、海带、洋葱、玉米须',
      sleep: '晚上11点前睡，少吃甜腻食物，多运动出汗排湿',
      percent: 88,
      ratio: 20
    },
    shire: {
      name: '湿热质',
      emoji: '🌋',
      theme: 'theme-shire',
      quote: '又湿又热，像夏天的桑拿天',
      tags: ['爱长痘', '脸出油', '口苦', '大便黏'],
      desc: '你就像闷热的桑拿天，体内既有湿又有热，脸上容易出油长痘，嘴巴里总觉得发苦发黏，大便黏马桶冲不干净。湿热体质需要一边清热一边祛湿，让身体清爽起来。',
      tea: '菊花金银花茶 — 菊花5朵+金银花少许，清热降火',
      point: '曲池穴 — 手肘弯曲处，每天按揉清热排毒',
      food: '绿豆、苦瓜、芹菜、莲子、荷叶、黄瓜、菊花茶',
      sleep: '不要熬夜加重内热，饮食清淡，少吃辛辣油腻',
      percent: 83,
      ratio: 17
    },
    qiyu: {
      name: '气郁质',
      emoji: '🌙',
      theme: 'theme-qiyu',
      quote: '情绪容易打结，像被云遮住的月亮',
      tags: ['爱叹气', '情绪低', '睡不好', '胸胁胀'],
      desc: '你就像被乌云遮住的月亮，情绪容易低落，总忍不住叹气，晚上睡觉也不踏实，有时候觉得胸口或两胁发胀。气郁体质的关键是"疏肝理气"，让情绪像流水一样顺畅起来。',
      tea: '玫瑰陈皮茶 — 玫瑰花5朵+陈皮1瓣，疏肝理气',
      point: '太冲穴 — 脚背大脚趾和二脚趾之间往上，睡前按揉',
      food: '玫瑰花、陈皮、佛手、柑橘类、芹菜、茉莉花、小麦',
      sleep: '睡前不刷手机，多做深呼吸，多出去走走接触大自然',
      percent: 86,
      ratio: 14
    }
  };

  // 9道测试题 - 每题4个选项对应不同体质
  var questions = [
    {
      q: '你的体力怎么样？',
      options: [
        { text: '容易累，走两步就想歇', type: 'qixu' },
        { text: '怕冷，手脚总是冰凉的', type: 'yangxu' },
        { text: '还可以，但手心经常发热', type: 'yinxu' },
        { text: '身体发沉，懒得动', type: 'tanshi' }
      ]
    },
    {
      q: '你的皮肤状态如何？',
      options: [
        { text: '容易出油长痘，脸总是亮亮的', type: 'shire' },
        { text: '偏干，容易起皮', type: 'yinxu' },
        { text: '没什么光泽，偏黄', type: 'qixu' },
        { text: '爱出油，身体也容易出汗', type: 'tanshi' }
      ]
    },
    {
      q: '你平时喜欢喝什么？',
      options: [
        { text: '一定要喝热的，冰的不敢碰', type: 'yangxu' },
        { text: '爱喝凉的，觉得解渴', type: 'yinxu' },
        { text: '喝温的就行，没特别偏好', type: 'qixu' },
        { text: '爱喝甜的、奶茶之类', type: 'tanshi' }
      ]
    },
    {
      q: '你的睡眠质量怎么样？',
      options: [
        { text: '入睡难，容易醒，梦多', type: 'qiyu' },
        { text: '睡得浅，容易盗汗', type: 'yinxu' },
        { text: '睡得很沉，但睡醒还是累', type: 'tanshi' },
        { text: '睡得还行，但早上起不来', type: 'yangxu' }
      ]
    },
    {
      q: '你的大便情况？',
      options: [
        { text: '经常不成形，黏马桶', type: 'tanshi' },
        { text: '比较干，有时候便秘', type: 'yinxu' },
        { text: '时好时坏，跟情绪有关', type: 'qiyu' },
        { text: '经常拉肚子，吃凉的更严重', type: 'yangxu' }
      ]
    },
    {
      q: '你的情绪状态？',
      options: [
        { text: '容易低落，爱叹气', type: 'qiyu' },
        { text: '容易烦躁，爱发火', type: 'shire' },
        { text: '比较温和，但容易累', type: 'qixu' },
        { text: '情绪不高，懒懒的', type: 'tanshi' }
      ]
    },
    {
      q: '你最想改善什么？',
      options: [
        { text: '想长胖点，太瘦了', type: 'yinxu' },
        { text: '想减肥，喝水都胖', type: 'tanshi' },
        { text: '想精力好点，不要总累', type: 'qixu' },
        { text: '想脸色好点，不要蜡黄', type: 'yangxu' }
      ]
    },
    {
      q: '你对温度的感受？',
      options: [
        { text: '最怕冷，冬天很难熬', type: 'yangxu' },
        { text: '最怕热，一热就难受', type: 'yinxu' },
        { text: '又怕热又怕冷，很敏感', type: 'qixu' },
        { text: '怕闷怕潮，下雨天最难受', type: 'tanshi' }
      ]
    },
    {
      q: '朋友怎么形容你？',
      options: [
        { text: '温柔安静，说话轻声细语', type: 'qixu' },
        { text: '元气满满，像小太阳', type: 'yangxu' },
        { text: '敏感细腻，想的比较多', type: 'qiyu' },
        { text: '佛系随和，什么都无所谓', type: 'tanshi' }
      ]
    }
  ];

  // 养生搭子匹配矩阵 (6x6)
  var buddyMatrix = {
    'qixu+qixu': { score: 70, desc: '同类相吸 — 两个气虚的人在一起', advice: '一起慢慢调养，互相监督不熬夜。适合一起喝养生茶、做温和的运动，节奏一致很舒服。' },
    'qixu+yangxu': { score: 85, desc: '暖宝宝组合 — 阳虚温暖气虚', advice: '阳虚的人像小太阳，能给气虚的人带来能量。一起喝姜枣茶、泡脚，互相取暖~' },
    'qixu+yinxu': { score: 65, desc: '互补型 — 一动一静', advice: '气虚的人多陪陪阴虚的人说说话，阴虚的人提醒气虚的人注意休息。互相学习对方的节奏。' },
    'qixu+tanshi': { score: 60, desc: '节奏不同 — 需要磨合', advice: '气虚的人觉得痰湿的人太慢，痰湿的人觉得气虚的人太娇弱。找到共同节奏是关键。' },
    'qixu+shire': { score: 55, desc: '差异较大 — 需要包容', advice: '湿热的人节奏快、火气大，气虚的人偏慢、能量低。互相理解差异，不要勉强对方。' },
    'qixu+qiyu': { score: 75, desc: '互相治愈 — 暖心组合', advice: '气郁的人给气虚的人带来情绪价值，气虚的人给气郁的人稳稳的安全感。一起散步聊天很治愈。' },
    'yangxu+yangxu': { score: 78, desc: '抱团取暖 — 两只小暖炉', advice: '一起泡枸杞、晒太阳、喝热汤。两个人都怕冷，冬天可以挤在一起取暖~' },
    'yangxu+yinxu': { score: 72, desc: '阴阳调和 — 互补型', advice: '阳虚的人暖，阴虚的人润，刚好互补。一起学习对方的养生方法，阴阳平衡。' },
    'yangxu+tanshi': { score: 82, desc: '动力组合 — 带动型', advice: '阳虚的人有热情，能带动懒懒的痰湿人一起运动。痰湿的人则能教会阳虚的人慢下来享受。' },
    'yangxu+shire': { score: 68, desc: '火上浇油 — 注意降火', advice: '两个都偏"热"的人在一起容易上火。一起喝菊花茶、多吃清淡的食物，降降温~' },
    'yangxu+qiyu': { score: 88, desc: '治愈系 — 阳光照进心里', advice: '阳虚体质的人像小太阳，能照亮气郁人的心。这是最好的养生搭子组合之一！' },
    'yinxu+yinxu': { score: 76, desc: '知己型 — 最懂彼此', advice: '两个人都需要滋润，一起喝银耳羹、做瑜伽、早睡早起。节奏一致，很有共鸣。' },
    'yinxu+tanshi': { score: 62, desc: '干湿不同 — 需磨合', advice: '阴虚的人偏干，痰湿的人偏湿。养生方法不太一样，但可以互相分享各自的养生小妙招。' },
    'yinxu+shire': { score: 58, desc: '双热组合 — 容易上火', advice: '两个体质都偏"热"，在一起容易急躁。多吃滋阴清热的食物，保持冷静~' },
    'yinxu+qiyu': { score: 80, desc: '温柔陪伴 — 细腻组合', advice: '都偏细腻敏感的两个人，很懂彼此的感受。一起听音乐、喝茶聊天，是灵魂伴侣型搭子。' },
    'tanshi+tanshi': { score: 84, desc: '佛系搭子 — 一起躺平', advice: '两个佛系的人在一起，节奏舒适不卷。互相监督少吃甜食、多运动，一起慢慢变健康。' },
    'tanshi+shire': { score: 74, desc: '祛湿搭档 — 共同目标', advice: '都需要祛湿清热，一起喝红豆薏米水、一起运动出汗。有共同目标的搭子最棒！' },
    'tanshi+qiyu': { score: 70, desc: '一动一静 — 互补平衡', advice: '痰湿人稳，气郁人敏。痰湿的人能给气郁的人安全感，气郁的人能带痰湿的人动起来。' },
    'shire+shire': { score: 65, desc: '双火组合 — 注意降火', advice: '两个火爆脾气在一起，容易吵架。多喝清热茶，多做深呼吸，一起练瑜伽降降火~' },
    'shire+qiyu': { score: 58, desc: '火星撞地球 — 需要磨合', advice: '湿热的人脾气急，气郁的人容易憋。一个爆发一个冷战，沟通方式很重要。' }
  };

  // 状态
  var currentQuestion = 0;
  var scores = {};
  var resultType = '';
  var friendType = '';

  // 初始化分数
  function initScores() {
    var keys = Object.keys(constitutions);
    for (var i = 0; i < keys.length; i++) {
      scores[keys[i]] = 0;
    }
  }

  // 显示页面
  function showPage(id) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
  }

  // 渲染题目
  function renderQuestion() {
    var q = questions[currentQuestion];
    document.getElementById('question-text').textContent = q.q;
    document.getElementById('progress-text').textContent = (currentQuestion + 1) + ' / ' + questions.length;
    document.getElementById('progress-fill').style.width = ((currentQuestion + 1) / questions.length * 100) + '%';

    var container = document.getElementById('options-container');
    container.innerHTML = '';

    for (var i = 0; i < q.options.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = q.options[i].text;
      btn.setAttribute('data-type', q.options[i].type);
      btn.addEventListener('click', handleAnswer);
      container.appendChild(btn);
    }
  }

  // 处理回答
  function handleAnswer(e) {
    var type = e.currentTarget.getAttribute('data-type');
    scores[type] = (scores[type] || 0) + 1;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      calculateResult();
    }
  }

  // 计算结果
  function calculateResult() {
    var maxScore = 0;
    var maxType = '';
    var keys = Object.keys(scores);

    for (var i = 0; i < keys.length; i++) {
      if (scores[keys[i]] > maxScore) {
        maxScore = scores[keys[i]];
        maxType = keys[i];
      }
    }

    // 如果有并列，用第一个
    resultType = maxType;
    renderResult();
    showPage('result-page');
  }

  // 渲染结果
  function renderResult() {
    var c = constitutions[resultType];
    var card = document.getElementById('result-card');

    // 设置主题
    card.className = 'result-card ' + c.theme;

    // 基本信息
    document.getElementById('tcm-illustration').textContent = c.emoji;
    document.getElementById('tcm-name').textContent = c.name;
    document.getElementById('tcm-quote').textContent = c.quote;

    // 标签
    var tagRow = document.getElementById('tag-row');
    tagRow.innerHTML = '';
    for (var i = 0; i < c.tags.length; i++) {
      var tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = c.tags[i];
      tagRow.appendChild(tag);
    }

    // 描述
    document.getElementById('tcm-desc').textContent = c.desc;

    // 养生建议
    document.getElementById('advice-tea').textContent = c.tea;
    document.getElementById('advice-point').textContent = c.point;
    document.getElementById('advice-food').textContent = c.food;
    document.getElementById('advice-sleep').textContent = c.sleep;

    // 数据
    document.getElementById('stat-percent').textContent = c.percent + '%';
    document.getElementById('stat-ratio').textContent = c.ratio + '%';

    // 底部
    document.getElementById('footer-text').textContent = '我是' + c.name + '！你的体质是什么？来测测看';
  }

  // 渲染搭子选择页
  function renderBuddyPage() {
    var grid = document.getElementById('buddy-grid');
    grid.innerHTML = '';
    var keys = Object.keys(constitutions);

    for (var i = 0; i < keys.length; i++) {
      var c = constitutions[keys[i]];
      var card = document.createElement('div');
      card.className = 'buddy-card';
      card.innerHTML = '<div class="buddy-card-icon">' + c.emoji + '</div><span class="buddy-card-name">' + c.name + '</span>';
      card.setAttribute('data-type', keys[i]);
      card.addEventListener('click', function(e) {
        friendType = e.currentTarget.getAttribute('data-type');
        showBuddyResult();
      });
      grid.appendChild(card);
    }
  }

  // 显示搭子结果
  function showBuddyResult() {
    var key1 = resultType + '+' + friendType;
    var key2 = friendType + '+' + resultType;
    var match = buddyMatrix[key1] || buddyMatrix[key2];

    var my = constitutions[resultType];
    var friend = constitutions[friendType];

    document.getElementById('my-icon').textContent = my.emoji;
    document.getElementById('my-name').textContent = my.name;
    document.getElementById('friend-icon').textContent = friend.emoji;
    document.getElementById('friend-name').textContent = friend.name;

    document.getElementById('match-score').textContent = match.score + '%';
    document.getElementById('match-desc').textContent = match.desc;
    document.getElementById('match-advice').textContent = match.advice;

    showPage('buddy-result-page');
  }

  // 重新开始
  function restart() {
    currentQuestion = 0;
    initScores();
    resultType = '';
    friendType = '';
    showPage('welcome-page');
  }

  // 绑定事件
  document.addEventListener('DOMContentLoaded', function() {
    initScores();

    document.getElementById('start-btn').addEventListener('click', function() {
      currentQuestion = 0;
      initScores();
      renderQuestion();
      showPage('quiz-page');
    });

    document.getElementById('buddy-btn').addEventListener('click', function() {
      renderBuddyPage();
      showPage('buddy-page');
    });

    document.getElementById('restart-btn').addEventListener('click', restart);
    document.getElementById('buddy-back-btn').addEventListener('click', function() {
      showPage('result-page');
    });
    document.getElementById('buddy-restart-btn').addEventListener('click', function() {
      renderBuddyPage();
      showPage('buddy-page');
    });
  });

})();
