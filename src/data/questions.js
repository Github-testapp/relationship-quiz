import { 
  Target, Star, DollarSign, Coffee, MessageCircle, Users, 
  ThumbsUp, Heart, Lock, Shield, Calendar, Home,
  Brain, Lightbulb, Puzzle, Zap, Activity, Cloud,
  Anchor, Compass, Sun, Moon, Wind, Scale,
  Glasses, Map, Book, Feather, Shell, Flower
} from 'lucide-react';

export const questions = [
  // 既存の3カテゴリはそのまま維持

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
    question: "共感力と理解度",
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    subQuestions: [
      {
        text: "相手の過去の経験や背景を理解していますか？",
        icon: <Book className="w-6 h-6 text-brown-500" />
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
  },
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
  }
];