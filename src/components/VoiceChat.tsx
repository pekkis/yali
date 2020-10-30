import { FunctionComponent, useEffect, useRef } from "react";
import React from "react";
import styles from "./VoiceChat.module.pcss";

type Props = {};

const useVoiceChat = (): SpeechRecognition | undefined => {
  const ref = useRef<SpeechRecognition | undefined>();

  useEffect(() => {
    const grammar =
      "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
    const recognition = new webkitSpeechRecognition();
    const speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;

    ref.current = recognition;
  }, []);

  return ref.current;
};

const VoiceChat: FunctionComponent<Props> = (props) => {
  const recognition = useVoiceChat();

  return (
    <div className={styles.root}>
      <button
        onClick={() => {
          if (!recognition) {
            return;
          }
          console.log("START");
          recognition.start();

          recognition.onstart = function () {
            console.log("start");
          };
          recognition.onresult = function (event) {
            console.log("result", event);
          };
          recognition.onerror = function (event) {
            console.log("error", event);
          };
          recognition.onend = function () {
            console.log("end");
          };
        }}
      >
        hilpata
      </button>
    </div>
  );
};

export default VoiceChat;
