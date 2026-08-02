type Dict = Record<string, string>;

const consonants: Dict = {
  क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "ng",
  च: "ch", छ: "chh", ज: "j", झ: "jh", ञ: "ny",
  ट: "t", ठ: "th", ड: "d", ढ: "dh", ण: "n",
  त: "t", थ: "th", द: "d", ध: "dh", न: "n",
  प: "p", फ: "ph", ब: "b", भ: "bh", म: "m",
  य: "y", र: "r", ल: "l", व: "v", ळ: "l",
  श: "sh", ष: "sh", स: "s", ह: "h",
  क्ष: "ksh", त्र: "tr", ज्ञ: "gya",
};

const vowels: Dict = {
  अ: "a", आ: "aa", इ: "i", ई: "ee", उ: "u",
  ऊ: "oo", ऋ: "ri", ए: "e", ऐ: "ai", ओ: "o", औ: "au",
};

const matras: Dict = {
  "ा": "aa", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo",
  "ृ": "ri", "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
};

const specials: Dict = {
  "ं": "n", "ः": "h", "ँ": "n", "्": "",
};

const wordDict: Dict = {
  में: "mein", की: "ki", का: "ka", के: "ke", और: "aur",
  से: "se", पर: "par", है: "hai", हुई: "hui", हुआ: "hua",
  को: "ko", ने: "ne", एक: "ek", यह: "yah", वह: "vah",
  था: "tha", थी: "thi", हैं: "hain", हो: "ho",
  गया: "gaya", गई: "gayi", दिया: "diya", लिया: "liya",
};

export function hindiToRoman(input: string): string {
  if (!input) return "";

  const cleaned = input
    .trim()
    .replace(/[।!?,.]/g, "")
    .replace(/[\u0964\u0965]/g, "")
    .replace(/\s+/g, " ");

  const words = cleaned.split(" ");
  const transliteratedWords: string[] = [];

  for (const rawWord of words) {
    const word = rawWord.trim();
    if (!word) continue;

    const lowerWord = word.toLowerCase();
    if (wordDict[lowerWord]) {
      transliteratedWords.push(wordDict[lowerWord]);
      continue;
    }

    let result = "";
    let i = 0;

    while (i < word.length) {
      const char = word[i];
      const nextChar = word[i + 1];
      const twoChar = char + nextChar;

      if (consonants[twoChar]) {
        result += consonants[twoChar];
        i += 2;
        continue;
      }

      if (vowels[char]) {
        result += vowels[char];
        i++;
        continue;
      }

      if (consonants[char]) {
        result += consonants[char];

        if (matras[nextChar]) {
          result += matras[nextChar];
          i += 2;
          continue;
        }

        if (nextChar === "्") {
          i += 2;
          continue;
        }

        if (nextChar && !consonants[nextChar] && !vowels[nextChar]) {
          i++;
          continue;
        }

        result += "a";
        i++;
        continue;
      }

      if (specials[char] !== undefined) {
        result += specials[char];
        i++;
        continue;
      }

      if (/[a-zA-Z0-9]/.test(char)) {
        result += char.toLowerCase();
        i++;
        continue;
      }

      i++;
    }

    if (result) {
      transliteratedWords.push(result);
    }
  }

  return transliteratedWords.join("-");
}