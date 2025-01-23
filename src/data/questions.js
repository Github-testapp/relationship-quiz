import {
  Target, Star, DollarSign, Coffee, MessageCircle, Users,
  ThumbsUp, Heart, Lock, Shield, Calendar, Home,
  Brain, Lightbulb, Puzzle, Zap, Activity, Cloud,
  Anchor, Compass, Sun, Moon, Wind, Scale,
  Map, Book, Feather,
  CheckCircle, AlertTriangle, Clock, FileCheck,
  Briefcase, Baby, KeyRound, Users2,
  Wallet, Building, PhoneCall,
  ClipboardList, Receipt, ScrollText, AlertCircle,
  PhoneForwarded, FileKey, HeartHandshake,
  FileSignature, Coins, Sparkles, HeartPulse, AlertOctagon,
  Stethoscope, BadgeAlert, HeartOff, UserX, 
  ShieldOff, BrainCircuit
} from 'lucide-react';

// 感情・心理面の質問グループ
const emotionalQuestions = [
  {
      question: "感情的知性の評価",
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      subQuestions: [
          {
              text: "相手の表情から感情を読み取ることができますか？",
              icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
          },
          {
              text: "相手が落ち込んでいるときに、適切なサポートができていますか？",
              icon: <Cloud className="w-6 h-6 text-blue-400" />
          },
          {
              text: "自分の感情をコントロールできていますか？",
              icon: <Activity className="w-6 h-6 text-red-500" />
          }
      ]
  },
  {
      question: "共感力と理解度",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      subQuestions: [
          {
              text: "相手の過去の経験や背景を理解していますか？",
              icon: <Book className="w-6 h-6 text-gray-500" />
          },
          {
              text: "相手の夢や目標を応援できていますか？",
              icon: <Wind className="w-6 h-6 text-cyan-400" />
          },
          {
              text: "相手の趣味や関心事に興味を持てていますか？",
              icon: <Puzzle className="w-6 h-6 text-green-400" />
          }
      ]
  }
];
// 価値観・生活面の質問グループ
const valueLifestyleQuestions = [
  {
      question: "価値観の深層分析",
      icon: <Compass className="w-8 h-8 text-green-500" />,
      subQuestions: [
          {
              text: "人生における成功の定義は一致していますか？",
              icon: <Star className="w-6 h-6 text-yellow-400" />
          },
          {
              text: "家族との関係性に対する考え方は似ていますか？",
              icon: <Home className="w-6 h-6 text-purple-400" />
          },
          {
              text: "精神的な成長や自己啓発に対する興味は共通していますか？",
              icon: <Feather className="w-6 h-6 text-blue-400" />
          }
      ]
  },
  {
      question: "生活価値観の一致",
      icon: <Home className="w-8 h-8 text-slate-500" />,
      subQuestions: [
          {
              text: "生活リズムや日常習慣は合っていますか？",
              icon: <Moon className="w-6 h-6 text-purple-400" />
          },
          {
              text: "金銭感覚や将来の経済計画は一致していますか？",
              icon: <DollarSign className="w-6 h-6 text-green-500" />
          },
          {
              text: "休暇の過ごし方や余暇の価値観は共有できていますか？",
              icon: <Sun className="w-6 h-6 text-orange-400" />
          }
      ]
  },
  {
      question: "日常生活の具体的設計",
      icon: <ClipboardList className="w-8 h-8 text-teal-500" />,
      subQuestions: [
          {
              text: "家賃・公共料金・食費などの分担方法は具体的に決まっていますか？",
              icon: <Receipt className="w-6 h-6 text-green-500" />
          },
          {
              text: "家事全般（掃除・洗濯・料理）の分担について合意できていますか？",
              icon: <ScrollText className="w-6 h-6 text-blue-400" />
          },
          {
              text: "お互いの自由時間の使い方について理解し合えていますか？",
              icon: <Calendar className="w-6 h-6 text-purple-400" />
          }
      ]
  }
];

// 安全性・リスク管理の質問グループ
const safetyQuestions = [
  {
      question: "ストレス対処力",
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      subQuestions: [
          {
              text: "困難な状況でお互いをサポートできていますか？",
              icon: <Anchor className="w-6 h-6 text-blue-500" />
          },
          {
              text: "ストレスが溜まった時の対処方法は理解し合えていますか？",
              icon: <Sun className="w-6 h-6 text-yellow-500" />
          },
          {
              text: "危機的状況での互いの反応を受け入れられますか？",
              icon: <Zap className="w-6 h-6 text-purple-400" />
          }
      ]
  },
  {
      question: "危機管理と安全性",
      icon: <ShieldOff className="w-8 h-8 text-red-500" />,
      subQuestions: [
          {
              text: "経済的な困難時の対処方法について話し合えていますか？",
              icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
          },
          {
              text: "健康や医療に関する考え方は一致していますか？",
              icon: <Activity className="w-6 h-6 text-green-500" />
          },
          {
              text: "緊急時の対応方法や連絡体制は整っていますか？",
              icon: <PhoneCall className="w-6 h-6 text-blue-400" />
          }
      ]
  }
];

// 将来性・成長の質問グループ
const futureGrowthQuestions = [
  {
      question: "成長志向性",
      icon: <Map className="w-8 h-8 text-emerald-500" />,
      subQuestions: [
          {
              text: "お互いの個人的な成長を支援し合えていますか？",
              icon: <Scale className="w-6 h-6 text-blue-400" />
          },
          {
              text: "新しい経験や挑戦に対する態度は一致していますか？",
              icon: <Lightbulb className="w-6 h-6 text-yellow-400" />
          },
          {
              text: "人生の転機における決断を共に考えられますか？",
              icon: <Compass className="w-6 h-6 text-indigo-500" />
          }
      ]
  },
  {
      question: "キャリアと自己実現",
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      subQuestions: [
          {
              text: "お互いのキャリアプランを理解し、支援し合えていますか？",
              icon: <Target className="w-6 h-6 text-red-400" />
          },
          {
              text: "仕事と私生活のバランスについて価値観は一致していますか？",
              icon: <Scale className="w-6 h-6 text-blue-500" />
          },
          {
              text: "将来の転職や転居の可能性について話し合えていますか？",
              icon: <Map className="w-6 h-6 text-green-400" />
          }
      ]
  }
];

// 関係性の段階別質問グループ
const stageBasedQuestions = [
  {
      question: "初期段階での確認事項",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      subQuestions: [
          {
              text: "基本的な身分証明や経歴について正直に共有できていますか？",
              icon: <FileCheck className="w-6 h-6 text-blue-500" />
          },
          {
              text: "SNSでの言動や普段の行動に不自然な点はありませんか？",
              icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
          },
          {
              text: "金銭感覚や収入に関する基本的な価値観は一致していますか？",
              icon: <Wallet className="w-6 h-6 text-green-500" />
          }
      ]
  },
  {
      question: "中期的な関係性の評価",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      subQuestions: [
          {
              text: "お互いの生活空間や日常について理解し合えていますか？",
              icon: <Home className="w-6 h-6 text-purple-400" />
          },
          {
              text: "家族や友人との付き合い方に共感できますか？",
              icon: <Users2 className="w-6 h-6 text-indigo-500" />
          },
          {
              text: "日常的なコミュニケーションはスムーズですか？",
              icon: <PhoneCall className="w-6 h-6 text-green-400" />
          }
      ]
  }
];

// 緊急時対応と将来計画の詳細質問グループ
const detailedPlanningQuestions = [
  {
      question: "緊急時の備え",
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      subQuestions: [
          {
              text: "緊急時の親族の連絡先や医療情報を共有していますか？",
              icon: <PhoneForwarded className="w-6 h-6 text-blue-500" />
          },
          {
              text: "相手の口座情報や重要書類の保管場所を把握していますか？",
              icon: <FileKey className="w-6 h-6 text-yellow-500" />
          },
          {
              text: "万が一の場合の対応手順について話し合えていますか？",
              icon: <BadgeAlert className="w-6 h-6 text-red-400" />
          }
      ]
  },
  {
      question: "将来の重要事項",
      icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
      subQuestions: [
          {
              text: "親の介護や将来の扶養について具体的に話し合えていますか？",
              icon: <HeartHandshake className="w-6 h-6 text-pink-500" />
          },
          {
              text: "婚前契約や万が一の際の取り決めについて合意できていますか？",
              icon: <FileSignature className="w-6 h-6 text-gray-500" />
          },
          {
              text: "資産状況や負債について包み隠さず開示し合えていますか？",
              icon: <Coins className="w-6 h-6 text-yellow-500" />
          }
      ]
  }
];

// 親密性と信頼関係の質問グループ
const intimacyTrustQuestions = [
  {
      question: "親密性の評価",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      subQuestions: [
          {
              text: "身体的な親密さについて率直に話し合えていますか？",
              icon: <Sparkles className="w-6 h-6 text-purple-400" />
          },
          {
              text: "互いの愛情表現の方法を理解し、尊重できていますか？",
              icon: <HeartPulse className="w-6 h-6 text-red-400" />
          },
          {
              text: "二人の関係に不安や違和感を感じることはありませんか？",
              icon: <HeartOff className="w-6 h-6 text-orange-500" />
          }
      ]
  },
  {
      question: "信頼関係の深さ",
      icon: <UserX className="w-8 h-8 text-violet-500" />,
      subQuestions: [
          {
              text: "過去の恋愛経験について正直に話し合えていますか？",
              icon: <MessageCircle className="w-6 h-6 text-blue-400" />
          },
          {
              text: "お互いのプライバシーを適切に尊重できていますか？",
              icon: <Lock className="w-6 h-6 text-gray-500" />
          },
          {
              text: "秘密や悩みを打ち明けられる関係ですか？",
              icon: <ThumbsUp className="w-6 h-6 text-green-400" />
          }
      ]
  }
];

// メインの質問配列
export const questions = [
  ...emotionalQuestions,
  ...valueLifestyleQuestions,
  ...safetyQuestions,
  ...futureGrowthQuestions,
  ...stageBasedQuestions,
  ...detailedPlanningQuestions,
  ...intimacyTrustQuestions
];

// カテゴリ別のレッドフラグ定義
export const redFlags = {
  initial: [
      "身分証明や経歴の確認を拒む",
      "金銭的な要求が早期にある",
      "SNSや行動履歴の不自然さ",
      "重要な事実の隠蔽や嘘"
  ],
  emotional: [
      "過度な執着や束縛が見られる",
      "感情的な暴力や威圧的な態度",
      "一方的な要求や妥協の強要",
      "極端な感情の起伏がある"
  ],
  relationship: [
      "家族や友人との接点を避ける",
      "相手と二人きりの時のみ親密になる",
      "他者との交流を制限しようとする",
      "過去の関係性について曖昧な態度をとる"
  ],
  financial: [
      "金銭感覚の極端な違い",
      "収入や支出について不透明",
      "借金や債務の隠蔽",
      "金銭的な話題を極端に避ける"
  ],
  future: [
      "将来の計画に関する話題を避ける",
      "具体的な人生設計を共有しない",
      "重要な決定を一方的に行う",
      "介護や扶養の話題を避ける"
  ],
  physical: [
      "身体的な親密さに関する不自然な態度",
      "健康状態について隠し事がある",
      "過度に攻撃的な身体接触",
      "親密さのレベルの急激な変化"
  ],
  communication: [
      "重要な情報共有を拒否する",
      "一方的なコミュニケーション",
      "約束や予定を頻繁に変更する",
      "感情的な会話を避ける"
  ]
};

// 日常的な振り返りポイント
export const dailyReflectionPoints = {
  emotional: {
      title: "感情面での振り返り",
      points: [
          "今日の感情の変化や特徴的な出来事",
          "相手との関わりで感じた違和感や不安",
          "特に印象に残った会話や態度",
          "感情的になった場面とその理由"
      ]
  },
  behavioral: {
      title: "行動面での振り返り",
      points: [
          "相手への思いやりある行動ができたか",
          "自分の言動で後悔している部分",
          "改善したほうが良いと感じた習慣",
          "相手の行動で気になった変化"
      ]
  },
  future: {
      title: "将来に向けての振り返り",
      points: [
          "今日話し合えた将来の計画",
          "新たに気づいた価値観の違い",
          "共に成長できたと感じる場面",
          "より深い理解が必要な話題"
      ]
  },
  trust: {
      title: "信頼関係の振り返り",
      points: [
          "互いの約束や決定事項の遵守状況",
          "情報共有の適切さ",
          "プライバシーの尊重度",
          "意思決定の公平さ"
      ]
  }
};

// コメントやフィードバックの保存用配列
export const userNotes = [];