/*function countWords(str){
   var count = 0;
   words = str.split(" ");
    for (i=0 ; i < words.length ; i++){
       // inner loop -- do the count
       if (words[i] != "")
          count += 1;
    }
   if (count == 1){
   document.theForm.results.value =
      "There is " +
      count +
      " word in the text string you entered!";
	}

	else{
	document.theForm.results.value =
      "There are " +
      count +
      " words in the text string you entered!";
	}
}
*/

function countLength(str){
   var count = 0;
    for (i=0 ; i < str.length+1 ; i++){
       // inner loop -- do the count
       //if (words[i] != "")
          count = i;
    }

   document.theForm.results.value = "Total Words: " + count;
}

function countwords(str){
   var spacecount = 0;
   var wordcounter = 1;
   var sentenceCounter = 0;
   var wordspersentence = 1;
   var x = document.getElementById("inStr").value;
   var avgWordsCounter=0;
   for(var i=0; i <= x.length; i++){
    if (x[i] == " ") {
     spacecount++;
     wordcounter++;
    }
    if (x[i] == '.' || x[i] == '?' || x[i] == '!') {
      sentenceCounter++;
      wordspersentence = wordcounter;
    }
    avgWordsCounter = wordspersentence/sentenceCounter;
}
    document.theForm.results.value = "Total Words: " + wordcounter +
    " - Total Sentences: " + sentenceCounter +
    " - Total Spaces: " + spacecount +
    " - Avgerage Words Per Sentence: " + avgWordsCounter;

}
