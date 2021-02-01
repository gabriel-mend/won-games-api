/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        &nbsp;
        <a
          href="https://github.com/loadingGabriel"
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
        &nbsp;
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
