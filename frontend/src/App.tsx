import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            할 일 추가
          </h2>
          {/* Todo 입력 폼이 여기에 들어갈 예정입니다 */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            할 일 목록
          </h2>
          {/* Todo 목록이 여기에 들어갈 예정입니다 */}
        </div>
      </div>
    </Layout>
  );
}

export default App;
