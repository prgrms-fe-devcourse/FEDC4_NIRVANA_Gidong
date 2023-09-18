import { RecoilRoot } from 'recoil';

import { queryClient, QueryClientProvider } from './apis/queryClient';
import PageRoutes from './routes/PageRoutes';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <PageRoutes />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
