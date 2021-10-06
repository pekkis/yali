import { FunctionComponent, useEffect, useRef, useState } from "react";
import React from "react";
import styles from "./VoiceChat.module.pcss";
import { useDispatch } from "react-redux";
import consumables from "../services/consumables";
import { FaMicrophoneAlt } from "react-icons/fa";

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
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "fi-FI";
    recognition.maxAlternatives = 1;

    ref.current = recognition;
  }, []);

  return ref.current;
};

const VoiceChat: FunctionComponent<Props> = (props) => {
  const recognition = useVoiceChat();

  const [listening, setListening] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <button
        disabled={listening}
        onClick={() => {
          if (!recognition) {
            return;
          }
          recognition.start();

          recognition.onstart = function () {
            setListening(true);
          };
          recognition.onresult = function (event: {
            results: SpeechRecognitionResultList;
          }) {
            const transcript = event.results.item(0).item(0).transcript;

            console.log("transcript", transcript);

            const match = /^syö (.*)$/.exec(transcript);

            if (match) {
              const consumable = Array.from(consumables.values()).find((c) => {
                return c.text.toLowerCase() === match[1].toLowerCase();
              });
              if (consumable) {
                dispatch({
                  type: "CONSUME",
                  payload: consumable
                });
              }
            }

            console.log(match, "match");
          };
          recognition.onerror = function (event) {
            console.log("error", event);
          };
          recognition.onend = function () {
            setListening(false);
            console.log("end");
          };
        }}
      >
        <FaMicrophoneAlt />
        käskytä!
      </button>
    </div>
  );
};

export default VoiceChat;
