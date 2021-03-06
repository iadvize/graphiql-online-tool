const defaultHeader = [
  {
    key: 'content-type',
    value: 'application/json',
    isActive: true,
    isNewHeader: false,
    isDisabled: true,
  },
  {
    key: 'Authorization',
    value: 'Bearer xxxxxxxxxxxx',
    isActive: false,
    isNewHeader: false,
    isDisabled: false,
  },
];
defaultHeader.push({
  key: '',
  value: '',
  isActive: false,
  isNewHeader: true,
});

const getUrl = path => {
  return `${window.__env.graphqlEndpoint}`;
};

const dataApisContent = [];
dataApisContent.push({
  id: 'DataApi',
  details: {
    title: '',
    description:
      'Explore GraphQL APIs with headers',
    category: 'data',
  },
  request: {
    method: 'POST',
    url: getUrl(),
    headers: defaultHeader,
    bodyType: 'graphql',
    params: JSON.stringify({}, null, 4),
  },
});

const dataApis = {
  title: 'Data',
  content: dataApisContent,
};

const explorerData = {
  sendingRequest: false,
  enableResponseSection: false,
  response: {},
};

const defaultApi = dataApis.content[0];

const defaultState = {
  currentTab: 0,
  displayedApi: defaultApi,
  modalState: {
    isOpen: false,
    isCopied: false,
  },
  explorerData,
  headerFocus: false,
  graphqlEndpoint: '',
};

export default defaultState;

export { defaultApi, defaultHeader };
