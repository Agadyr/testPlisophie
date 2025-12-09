export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex?: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, number>; // questionId -> optionIndex
  isFinished: boolean;
  
  // New State for Batch/Review
  answerHistory: Record<number, boolean>; // questionIndex -> wasCorrect
  isReviewing: boolean;
  reviewQueue: number[]; // Indices of questions to review
  mainProgressIndex: number; // The furthest index reached in normal flow
}

export interface AIAnalysis {
  correctOptionIndex: number;
  explanation: string;
}

export enum GameMode {
  PRACTICE = 'PRACTICE', // Immediate feedback
  EXAM = 'EXAM', // Feedback at the end
}