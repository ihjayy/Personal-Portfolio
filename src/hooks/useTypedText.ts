import { useState, useEffect } from "react";

export function useTypedText(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) {
          setText(word.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}
