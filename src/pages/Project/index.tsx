import { SkillContainer } from "./styles";

export const Project = () => {
  return (
    <SkillContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Habilidades</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi
        architecto, consectetur nobis eum earum vel quasi sunt repudiandae, qui
        quae, consequatur non modi iste delectus assumenda laudantium quod
        accusamus.
      </p>
    </SkillContainer>
  );
};
