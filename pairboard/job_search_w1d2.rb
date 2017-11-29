def palindromeDictionaryNaive(dictionary)
  results = []
  dictionary.each do |word|
    dictionary.each do |word2|
      if word != word2
        combined = word+word2
        if palindrome(combined)
          result << [word, word2]
        end
      end
    end
  end
  results
end

def palindromeDictionaryPro(dictionary)
  answers = []
  dict = Containers::Trie.new

  dictionary.each do |word|
    dict.push(word, word)
  end

  dict.each do |word|
    wild = word.reverse.split("")
    wild[-1] = "*"
    wild = wild.join("")
    results = t.wildcard(wild)
    if !results.empty
      results.each do |result|
        checkWord = word+result
        if palindrome(checkWord)
          answers << [word, result]
        end
      end
    end
  end

  result
  # lol
end

def palindrome(string)
  string == string.reverse
end
