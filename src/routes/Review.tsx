import { useEffect, useState } from 'react';
import { getWords, setLastReview } from '../services/api.ts';

type Word = {
  readonly word: string;
  readonly wordId: string;
  readonly reading: string;
  readonly kanji: string;
  readonly kanjiId: number;
  readonly lastReview: string;
};

type View = 'question' | 'answer';

export default function Review() {
  const [words, setWords] = useState<Word[]>([]);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [view, setView] = useState<View>('question');

  useEffect(() => {
    getWords().then(words => {
      setWords(words);
      setWords(words[0]);
    });
  }, []);

  const updateLastReview = (wordId: string, isSuccessful?: boolean) => {
    if (isSuccessful) {
      setLastReview(wordId);
    }
    setWordIndex(wordIndex + 1);
    setView('answer');
  };

  return (
    <div>
      {!words[wordIndex] && <span>you don't have something to review</span>}
      {view === 'question' && !!words[wordIndex] && (
        <div key={words[wordIndex].wordId}>
          <span>{words[wordIndex].word}</span>;
          <button onClick={() => setView('answer')}>show answer</button>
        </div>
      )}
      {view === 'answer' && !!words[wordIndex] && (
        <div key={words[wordIndex].wordId}>
          <span>{words[wordIndex].reading}</span>;
          <button onClick={() => updateLastReview(words[wordIndex].wordId)}>i know</button>
          <button onClick={() => updateLastReview(words[wordIndex].wordId, true)}>
            i DON'T know
          </button>
        </div>
      )}
    </div>
  );
}
