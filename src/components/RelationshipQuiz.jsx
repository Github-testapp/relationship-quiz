import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RefreshCcw } from 'lucide-react';
import { questions } from '../data/questions';
import { getResultTheme, getAdvice } from '../data/results';

const RelationshipQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const calculateCategoryScores = () => {
    const scores = {};
    let index = 0;

    ['emotional', 'valueLifestyle', 'safety', 'futureGrowth', 'stageBased', 'detailedPlanning', 'intimacyTrust']
      .forEach(category => {
        const categoryAnswers = answers.slice(index, index + 3);
        const score = Math.round(
          (categoryAnswers.reduce((sum, score) => sum + score, 0) / (3 * 5)) * 100
        );
        scores[category] = score;
        index += 3;
      });

    return scores;
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (newAnswers.length >= questions.length * 3) {
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
      const maxPossibleScore = questions.length * 3 * 5;
      const compatibilityPercentage = Math.round((totalScore / maxPossibleScore) * 100);
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const totalQuestions = questions.length * 3;
    const maxPossibleScore = totalQuestions * 5;
    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getCategoryName = (category) => {
    const names = {
      emotional: "感情的知性",
      valueLifestyle: "価値観・生活",
      safety: "安全性・リスク",
      futureGrowth: "将来性・成長",
      stageBased: "関係性の段階",
      detailedPlanning: "具体的計画",
      intimacyTrust: "親密性・信頼"
    };
    return names[category] || category;
  };

  if (showResult) {
    const compatibilityPercentage = calculateResult();
    const theme = getResultTheme(compatibilityPercentage);
    const adviceData = getAdvice(compatibilityPercentage);
    const categoryScores = calculateCategoryScores();

    return (
      <Card className={`w-full max-w-2xl mx-auto mt-4 md:mt-8 overflow-hidden ${theme.bgColor}`}>
        <CardHeader className="text-center pb-2">
          <CardTitle className={`text-2xl font-bold ${theme.color}`}>
            {theme.title}
          </CardTitle>
          <p className={`text-lg ${theme.color}`}>{theme.subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              {theme.icon}
            </div>
            <h2 className={`text-4xl font-bold ${theme.color}`}>
              総合相性度: {compatibilityPercentage}%
            </h2>

            {/* カテゴリ別スコア */}
            <div className="space-y-3 text-left bg-white bg-opacity-40 rounded-lg p-4">
              <h3 className="font-bold text-gray-700 mb-2">カテゴリ別評価:</h3>
              {Object.entries(categoryScores).map(([category, score]) => (
                <div key={category} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{getCategoryName(category)}</span>
                    <span className="text-sm font-medium">{score}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* 詳細分析 */}
            <div className="text-left space-y-4 bg-white bg-opacity-50 rounded-lg p-6">
              <p className="text-lg font-bold text-gray-800">
                {adviceData.summary}
              </p>

              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">強み:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {adviceData.strengths.map((strength, index) => (
                    <li key={index} className="text-gray-600">{strength}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">重点分野:</h3>
                {Object.entries(adviceData.areas).map(([area, text]) => (
                  <div key={area} className="bg-white bg-opacity-50 rounded p-2">
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">アドバイス:</h3>
                <p className="text-gray-600 whitespace-pre-line">{adviceData.advice}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">注意点:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {adviceData.warnings.map((warning, index) => (
                    <li key={index} className="text-gray-600">{warning}</li>
                  ))}
                </ul>
              </div>

              {adviceData.focus_points && (
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-700">重点的に取り組むべき項目:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {adviceData.focus_points.map((point, index) => (
                      <li key={index} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Button
            onClick={resetQuiz}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white flex items-center justify-center gap-2 py-6"
          >
            <RefreshCcw className="w-5 h-5" />
            もう一度診断する
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentMainQuestion = questions[Math.floor(currentQuestion / 3)];
  const currentSubQuestion = currentMainQuestion.subQuestions[currentQuestion % 3];

  return (
    <Card className="w-full max-w-2xl mx-auto mt-4 md:mt-8 bg-gradient-to-r from-pink-50 to-purple-50 px-2 md:px-6">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          {currentMainQuestion.icon}
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold text-purple-700">
          {currentMainQuestion.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-1 mb-6">
            {Array(questions.length * 3).fill(0).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i <= currentQuestion ? "bg-pink-500" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
          <div className="flex justify-center mb-2">
            {currentSubQuestion.icon}
          </div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
            {currentSubQuestion.text}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-1 md:gap-2">
          {[1, 2, 3, 4, 5].map((score) => (
            <Button
              key={score}
              onClick={() => handleAnswer(score)}
              className={`p-2 md:p-6 text-base md:text-lg font-semibold transition-all duration-200
                ${score === 5 ? 'bg-rose-300 hover:bg-rose-400 text-white' :
                  score === 4 ? 'bg-pink-200 hover:bg-pink-300 text-gray-700' :
                    score === 3 ? 'bg-purple-200 hover:bg-purple-300 text-gray-700' :
                      score === 2 ? 'bg-violet-200 hover:bg-violet-300 text-gray-700' :
                        'bg-slate-200 hover:bg-slate-300 text-gray-700'
                }`}
            >
              {score}
            </Button>
          ))}
        </div>
        <div className="text-center mt-6 space-y-2">
          <div className="flex justify-between text-sm md:text-base font-medium text-gray-600 px-2">
            <span>1: まったく当てはまらない</span>
            <span>5: とてもよく当てはまる</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="h-0.5 w-16 bg-gray-300"></div>
            <span className="text-gray-400">選択してください</span>
            <div className="h-0.5 w-16 bg-gray-300"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelationshipQuiz;