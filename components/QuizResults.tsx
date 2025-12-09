import React from 'react';
import { QuizState } from '../types';
import { Trophy, RefreshCw, Home } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface QuizResultsProps {
  state: QuizState;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ state, totalQuestions, onRestart }) => {
  const answeredCount = Object.keys(state.userAnswers).length;
  // Since we don't have a "correct" answer key for all without AI, we visualize participation
  // If we had the AI results stored, we could show accuracy. For this static demo, we show completion.
  
  const data = [
    { name: 'Answered', value: answeredCount },
    { name: 'Skipped', value: totalQuestions - answeredCount },
  ];
  
  const COLORS = ['#3b82f6', '#e2e8f0'];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
        <Trophy className="w-10 h-10 text-yellow-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
      <p className="text-gray-500 mb-8">You have reached the end of the philosophy assessment.</p>

      <div className="h-64 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Questions</p>
          <p className="text-3xl font-bold text-gray-900">{totalQuestions}</p>
        </div>
        <div className="bg-brand-50 p-4 rounded-xl">
          <p className="text-sm text-brand-600 uppercase tracking-wider font-semibold">Answered</p>
          <p className="text-3xl font-bold text-brand-700">{answeredCount}</p>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
      >
        <RefreshCw className="w-5 h-5" />
        Restart Quiz
      </button>
    </div>
  );
};
