import React from 'react';

const Comment: React.SFC<{ text: string }> = ({ text }) => {
  const emojiText = text
    .replace(':)', '😃')
    .replace(':(', '😞')
    .replace(':D', '😁');

  return <span>{emojiText}</span>;
};

const App: React.SFC = () => (
  <div>
    <Comment text="Today we are sailing home :D" />
  </div>
);

export default App;
