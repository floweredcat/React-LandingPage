import { DropDownItem } from "../DropDownItem/DropDownItem";
import styles from "./styles.module.scss";

export const QuestionsSection = () => {
  const MOCK_QUESTIONS = [
    {
      question: "Какие у вас есть производители?",
      answer:
        "Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю решить его проблему и снять нагрузку с центра поддержки",
    },
    {
      question: "Какие у вас есть производители?",
      answer:
        "Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю решить его проблему и снять нагрузку с центра поддержки",
    },
    {
      question: "Какие у вас есть производители?",
      answer:
        "Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю решить его проблему и снять нагрузку с центра поддержки",
    },
    {
      question: "Какие у вас есть производители?",
      answer:
        "Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю решить его проблему и снять нагрузку с центра поддержки",
    },
    {
      question: "Какие у вас есть производители?",
      answer:
        "Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю решить его проблему и снять нагрузку с центра поддержки",
    },
  ];
  return (
    <section className={styles.root}>
      <h2>Часто задаваемые вопросы</h2>
      <ul>
        {MOCK_QUESTIONS.map(({ question, answer }) => (
          <DropDownItem
            key={answer + question}
            title={question}
            content={answer}
          />
        ))}
      </ul>
    </section>
  );
};