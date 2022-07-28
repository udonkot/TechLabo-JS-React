import React from 'react';

interface IProps {
}

const About: React.FC<IProps> = () => {
  return (
    <div className="About">
      DXサービスユニットのメンバが作成したサービス・成果物が稼働するところ<br />
      随時リリース予定
    </div>
  );
}

export default About;
