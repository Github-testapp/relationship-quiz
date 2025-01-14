import { Heart, Star, MessageCircle, Clock, AlertTriangle, Scale, Brain, Shield } from 'lucide-react';

export const getResultTheme = (percentage) => {
  if (percentage >= 85) {
    return {
      color: "text-pink-500",
      bgColor: "bg-gradient-to-r from-pink-50 to-purple-50",
      icon: <Heart className="w-20 h-20 text-pink-500 animate-pulse" />,
      title: "最高の相性 (Excellent Compatibility)",
      subtitle: "調和のとれた関係性",
    };
  } else if (percentage >= 70) {
    return {
      color: "text-purple-500",
      bgColor: "bg-gradient-to-r from-purple-50 to-indigo-50",
      icon: <Star className="w-20 h-20 text-purple-500" />,
      title: "良好な相性 (Good Compatibility)",
      subtitle: "安定した関係の基盤",
    };
  } else if (percentage >= 55) {
    return {
      color: "text-blue-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50",
      icon: <Scale className="w-20 h-20 text-blue-500" />,
      title: "要調整 (Needs Alignment)",
      subtitle: "成長の余地のある関係",
    };
  } else if (percentage >= 40) {
    return {
      color: "text-yellow-500",
      bgColor: "bg-gradient-to-r from-yellow-50 to-amber-50",
      icon: <AlertTriangle className="w-20 h-20 text-yellow-500" />,
      title: "注意が必要 (Caution Required)",
      subtitle: "慎重な検討が必要",
    };
  } else {
    return {
      color: "text-gray-500",
      bgColor: "bg-gradient-to-r from-gray-50 to-slate-50",
      icon: <Clock className="w-20 h-20 text-gray-500" />,
      title: "要再考 (Reconsideration Needed)",
      subtitle: "根本的な見直しが必要",
    };
  }
};

export const getAdvice = (percentage) => {
  if (percentage >= 85) {
    return {
      summary: "非常に高い相性と深い理解が確認できます。",
      strengths: [
        "感情的知性が高く、相互理解が深い",
        "価値観の一致度が極めて高い",
        "コミュニケーションパターンが調和的",
      ],
      advice: "この強い絆を活かし、さらなる関係の深化を目指すことをお勧めします。定期的な対話を通じて、お互いの成長をサポートし合える関係性を維持していってください。",
      warnings: "完璧な関係性であっても、慢心は禁物です。定期的な関係性の振り返りを心がけましょう。"
    };
  } else if (percentage >= 70) {
    return {
      summary: "安定した関係性の基盤が確認できます。",
      strengths: [
        "基本的な価値観の一致",
        "健全なコミュニケーション能力",
        "相互理解への意欲的な姿勢"
      ],
      advice: "現在の良好な関係を維持しながら、特に感情的な側面での理解を深めることで、より強い絆を築くことができるでしょう。定期的な対話の機会を設けることをお勧めします。",
      warnings: "快適な関係性に甘んじることなく、継続的な努力を心がけましょう。"
    };
  } else if (percentage >= 55) {
    return {
      summary: "いくつかの課題が見られますが、改善の余地は十分にあります。",
      strengths: [
        "基本的な信頼関係の存在",
        "改善への意欲",
        "共通点の認識"
      ],
      advice: "特に価値観とコミュニケーションスタイルの違いに注目し、互いの違いを理解し合うための対話を重ねることが重要です。カウンセリングなどの専門家のサポートも検討に値するかもしれません。",
      warnings: "早急な改善を求めすぎると、かえって関係性を悪化させる可能性があります。段階的なアプローチを心がけましょう。"
    };
  } else if (percentage >= 40) {
    return {
      summary: "重要な課題が複数確認されます。慎重な検討が必要です。",
      strengths: [
        "改善の可能性の存在",
        "問題点の明確化",
      ],
      advice: "根本的な価値観の違いについて、真摯な話し合いが必要です。専門家のカウンセリングを強く推奨します。",
      warnings: "この段階での改善には、両者の強い意志と具体的な行動計画が必要です。安易な妥協は避けるべきでしょう。"
    };
  } else {
    return {
      summary: "深刻な不一致が多数見られます。",
      strengths: [
        "現状認識の機会",
        "将来の選択肢の明確化"
      ],
      advice: "お互いにとって最善の選択について、冷静に検討する時期に来ています。必要に応じて、専門家に相談することを強く推奨します。",
      warnings: "互いの幸せのために、別々の道を選択することも視野に入れるべき段階です。"
    };
  }
};