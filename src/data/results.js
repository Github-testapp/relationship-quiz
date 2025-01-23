import {
  Heart, Star, MessageCircle, Clock, AlertTriangle, Scale, Brain, Shield,
  CheckCircle, ArrowRight, ThumbsUp, XCircle, AlertOctagon, HelpCircle,
  FileCheck, UserCheck, HeartHandshake, ShieldAlert
} from 'lucide-react';

export const getResultTheme = (percentage) => {
  if (percentage >= 90) {
    return {
      color: "text-pink-500",
      bgColor: "bg-gradient-to-r from-pink-50 to-purple-50",
      icon: <Heart className="w-20 h-20 text-pink-500 animate-pulse" />,
      title: "最高の相性 (Perfect Match)",
      subtitle: "極めて調和のとれた理想的な関係性",
      badge: "理想的な関係性",
      intensity: "exceptional"
    };
  } else if (percentage >= 80) {
    return {
      color: "text-purple-500",
      bgColor: "bg-gradient-to-r from-purple-50 to-indigo-50",
      icon: <HeartHandshake className="w-20 h-20 text-purple-500" />,
      title: "優れた相性 (Excellent Compatibility)",
      subtitle: "深い理解と信頼に基づく関係性",
      badge: "非常に良好",
      intensity: "excellent"
    };
  } else if (percentage >= 70) {
    return {
      color: "text-blue-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      icon: <UserCheck className="w-20 h-20 text-blue-500" />,
      title: "良好な相性 (Good Match)",
      subtitle: "安定した関係の基盤がある",
      badge: "良好",
      intensity: "good"
    };
  } else if (percentage >= 60) {
    return {
      color: "text-emerald-500",
      bgColor: "bg-gradient-to-r from-emerald-50 to-teal-50",
      icon: <Scale className="w-20 h-20 text-emerald-500" />,
      title: "要調整 (Needs Alignment)",
      subtitle: "改善と成長の余地がある関係",
      badge: "調整が必要",
      intensity: "moderate"
    };
  } else if (percentage >= 45) {
    return {
      color: "text-yellow-500",
      bgColor: "bg-gradient-to-r from-yellow-50 to-amber-50",
      icon: <AlertTriangle className="w-20 h-20 text-yellow-500" />,
      title: "注意が必要 (Caution Required)",
      subtitle: "慎重な検討と対話が必要",
      badge: "要注意",
      intensity: "concerning"
    };
  } else if (percentage >= 30) {
    return {
      color: "text-orange-500",
      bgColor: "bg-gradient-to-r from-orange-50 to-red-50",
      icon: <ShieldAlert className="w-20 h-20 text-orange-500" />,
      title: "深刻な課題あり (Serious Issues)",
      subtitle: "重大な不一致が存在",
      badge: "深刻",
      intensity: "serious"
    };
  } else {
    return {
      color: "text-red-500",
      bgColor: "bg-gradient-to-r from-red-50 to-gray-50",
      icon: <XCircle className="w-20 h-20 text-red-500" />,
      title: "危険な関係性 (Critical Mismatch)",
      subtitle: "根本的な見直しが必要",
      badge: "危険",
      intensity: "critical"
    };
  }
};

export const getAdvice = (percentage) => {
  if (percentage >= 90) {
    return {
      summary: "極めて高い相性と深い相互理解が確認できます。",
      strengths: [
        "感情的知性と共感力が非常に高い",
        "価値観の一致度が理想的なレベル",
        "コミュニケーションが極めて良好",
        "将来のビジョンが明確に共有できている",
        "信頼関係が強固に確立されている"
      ],
      areas: {
        emotional: "感情面での理解と支援が相互に充実",
        practical: "日常生活での協力体制が確立",
        future: "将来計画が具体的に共有できている",
        trust: "深い信頼関係が築けている"
      },
      advice: "この理想的な関係性をさらに発展させるために：" +
        "\n・定期的な対話の機会を大切に" +
        "\n・お互いの成長をサポートし続ける" +
        "\n・新しい共通の目標を設定する" +
        "\n・感謝の気持ちを常に表現する",
      warnings: [
        "理想的な関係性でも定期的な振り返りは重要です",
        "現状に慢心せず、さらなる関係の深化を目指しましょう",
        "些細な変化にも敏感であることを心がけてください"
      ],
      focus_points: [
        "長期的な目標の定期的な見直し",
        "新しい共通の趣味や活動の開拓",
        "重要な決定事項の記録と共有",
        "定期的な感謝の表現"
      ]
    };
  } else if (percentage >= 80) {
    return {
      summary: "非常に良好な相性と深い理解が確認できます。",
      strengths: [
        "コミュニケーションが良好",
        "基本的な価値観が一致",
        "お互いへの思いやりが強い",
        "将来への展望を共有できている"
      ],
      areas: {
        emotional: "感情面での理解が十分",
        practical: "実践的な協力関係が確立",
        future: "将来の計画が具体的",
        trust: "信頼関係が安定"
      },
      advice: "さらなる関係性の向上のために：" +
        "\n・定期的な対話の時間を設ける" +
        "\n・新しい共通の経験を積極的に作る" +
        "\n・お互いの成長をサポートする" +
        "\n・些細な感謝の気持ちも表現する",
      warnings: [
        "現状に満足せず、さらなる理解を深める努力を",
        "小さな違和感も見逃さない姿勢を持つ",
        "定期的な関係性の確認が重要"
      ],
      focus_points: [
        "コミュニケーションの質の維持",
        "共通の目標設定と実現",
        "相互理解の深化",
        "感謝の気持ちの表現"
      ]
    };
  } else if (percentage >= 70) {
    return {
      summary: "良好な関係性の基盤が確認できます。",
      strengths: [
        "基本的な信頼関係がある",
        "コミュニケーションの基盤がある",
        "互いを理解しようとする姿勢がある",
        "共通の価値観が存在する"
      ],
      areas: {
        emotional: "感情面での理解を深める余地あり",
        practical: "日常生活での協力関係は安定",
        future: "将来計画の具体化が必要",
        trust: "信頼関係は築けている"
      },
      advice: "関係性の強化のために：" +
        "\n・より深い対話の機会を増やす" +
        "\n・価値観の違いを理解し合う" +
        "\n・将来の計画をより具体的に話し合う" +
        "\n・感情表現を豊かにする",
      warnings: [
        "現状に満足せず、改善の努力を続ける",
        "小さな誤解も放置しない",
        "定期的な話し合いの機会を持つ"
      ],
      focus_points: [
        "コミュニケーションの改善",
        "価値観の違いの理解",
        "将来計画の具体化",
        "感情表現の充実"
      ]
    };
  }
  else if (percentage >= 60) {
    return {
      summary: "いくつかの課題が見られますが、改善の余地は十分にあります。",
      strengths: [
        "基本的な対話は可能",
        "改善への意欲がある",
        "共通点を見出せる部分がある"
      ],
      areas: {
        emotional: "感情面での理解に課題あり",
        practical: "生活面での調整が必要",
        future: "将来計画の共有が不十分",
        trust: "信頼関係の構築が必要"
      },
      advice: "関係改善のために：" +
        "\n・価値観の違いを正直に話し合う" +
        "\n・日常生活での具体的な改善点を確認" +
        "\n・将来の希望について率直に対話" +
        "\n・専門家のアドバイスも検討",
      warnings: [
        "課題を放置せず、積極的に取り組む",
        "一方的な要求は避ける",
        "焦らず段階的な改善を目指す"
      ],
      focus_points: [
        "コミュニケーションパターンの見直し",
        "生活習慣の違いの調整",
        "将来への不安の共有",
        "相互理解の促進"
      ]
    };
  } else if (percentage >= 45) {
    return {
      summary: "重要な課題が複数確認されます。慎重な検討と対話が必要です。",
      strengths: [
        "問題点を認識できている",
        "改善の可能性は残されている",
        "対話の意思はある"
      ],
      areas: {
        emotional: "感情面での不一致が顕著",
        practical: "生活面での摩擦が多い",
        future: "将来像に大きな違いあり",
        trust: "信頼関係に不安あり"
      },
      advice: "関係性の見直しのために：" +
        "\n・専門家のカウンセリングを検討" +
        "\n・根本的な価値観の違いを確認" +
        "\n・具体的な改善計画を立てる" +
        "\n・期限を決めて変化を評価",
      warnings: [
        "感情的な判断を避ける",
        "一方的な押し付けは危険",
        "互いの本質的な変化は期待しすぎない"
      ],
      focus_points: [
        "基本的な価値観の確認",
        "生活スタイルの根本的な違い",
        "将来設計の不一致",
        "信頼関係の再構築"
      ]
    };
  } else if (percentage >= 30) {
    return {
      summary: "深刻な不一致と課題が多く見られます。根本的な見直しが必要です。",
      strengths: [
        "現状を認識できている",
        "問題点が明確化されている"
      ],
      areas: {
        emotional: "感情面での深刻な対立",
        practical: "基本的な生活観の不一致",
        future: "将来展望の大きな乖離",
        trust: "信頼関係の重大な問題"
      },
      advice: "今後の判断のために：" +
        "\n・専門家に相談することを強く推奨" +
        "\n・互いの幸せのために冷静な判断を" +
        "\n・関係性の継続について真剣な検討を" +
        "\n・別々の道を選ぶ可能性も視野に",
      warnings: [
        "互いを傷つける行動は避ける",
        "感情的な決断は控える",
        "必要に応じて距離を置く"
      ],
      focus_points: [
        "関係性継続の可能性の評価",
        "互いの幸せの再定義",
        "建設的な別れ方の検討",
        "周囲のサポート体制の確認"
      ]
    };
  } else {
    return {
      summary: "危機的な状況が確認されます。早急な対応が必要です。",
      strengths: [
        "問題の深刻さを認識できている",
        "変化の必要性を理解できている"
      ],
      areas: {
        emotional: "重大な感情的対立あり",
        practical: "基本的な価値観が完全に不一致",
        future: "共通の将来像が描けない",
        trust: "信頼関係が著しく損なわれている"
      },
      advice: "緊急の対応として：" +
        "\n・直ちに専門家に相談" +
        "\n・関係性の解消を真剣に検討" +
        "\n・必要に応じて法的助言を得る" +
        "\n・精神的・身体的な健康を最優先",
      warnings: [
        "これ以上の関係継続はリスクが高い",
        "互いの安全を最優先する",
        "周囲のサポートを積極的に求める"
      ],
      focus_points: [
        "心身の健康の保護",
        "安全な距離の確保",
        "建設的な決別方法の模索",
        "今後の人生の再設計"
      ]
    };
  }
};
