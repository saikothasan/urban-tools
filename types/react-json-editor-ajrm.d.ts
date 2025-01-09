declare module 'react-json-editor-ajrm/locale/en' {
  const locale: {
    format: string;
    oops: string;
    tryAgain: string;
    copy: string;
    copyToClipboard: string;
    paste: string;
    pasteFromClipboard: string;
    delete: string;
    insert: string;
    properties: string;
    elements: string;
    // Add the missing properties
    symbols: {
      colon: string;
      comma: string;
      semicolon: string;
      slash: string;
      backslash: string;
      brackets: {
        round: string;
        square: string;
        curly: string;
        angle: string;
      };
      period: string;
      quotes: {
        single: string;
        double: string;
        grave: string;
      };
      apostrophe: string;
      ampersand: string;
      asterisk: string;
      at: string;
      equals: string;
      hash: string;
      percent: string;
      plus: string;
      minus: string;
      dash: string;
      underscore: string;
      exclamation: string;
      question: string;
      caret: string;
      tilde: string;
      grave: string;
      bar: string;
      pipeline: string;
      ellipsis: string;
    };
    types: {
      string: string;
      number: string;
      boolean: string;
      object: string;
      array: string;
      null: string;
    };
    invalidToken: {
      tokenSequence: {
        prohibited: string;
        permitted: string;
      };
      termSequence: {
        prohibited: string;
        permitted: string;
      };
      double: string;
      useInstead: string;
      syntax: string;
    };
    brace: {
      curly: {
        missingOpen: string;
        missingClose: string;
        cannotWrap: string;
      };
      square: {
        missingOpen: string;
        missingClose: string;
        cannotWrap: string;
      };
    };
    string: {
      missingOpen: string;
      missingClose: string;
      mustBeWrappedByQuotes: string;
      nonAlphanumeric: string;
      unexpectedKey: string;
    };
    key: {
      numberAndLetterMissingQuotes: string;
      spaceMissingQuotes: string;
      unexpectedString: string;
    };
    colon: {
      needPrecedingKey: string;
      noFollowingSemicolon: string;
      missingAfterKey: string;
    };
  };
  export default locale;
}

