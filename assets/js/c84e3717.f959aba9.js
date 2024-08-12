"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{7332:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"writing-good-unit-tests","metadata":{"permalink":"/docusaurus-search-local/blog/writing-good-unit-tests","editUrl":"https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/blog/2019-06-15-writing-good-unit-tests.md","source":"@site/blog/2019-06-15-writing-good-unit-tests.md","title":"\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5","description":"\u672c\u6587\u8f6c\u8f7d\u81ea https://wangshenwei.com/writing-good-unit-tests/ \u3002","date":"2019-06-15T00:00:00.000Z","formattedDate":"June 15, 2019","tags":[],"readingTime":7.49,"hasTruncateMarker":false,"authors":[{"name":"Wang Shenwei","url":"https://github.com/weareoutman","imageURL":"https://avatars2.githubusercontent.com/u/2338946?s=460&v=4"}],"frontMatter":{"slug":"writing-good-unit-tests","title":"\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5","author":"Wang Shenwei","author_url":"https://github.com/weareoutman","author_image_url":"https://avatars2.githubusercontent.com/u/2338946?s=460&v=4"},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/docusaurus-search-local/blog/welcome"}},"content":":::note\\n\u672c\u6587\u8f6c\u8f7d\u81ea https://wangshenwei.com/writing-good-unit-tests/ \u3002\\n:::\\n\\n> \u201c\u4e07\u7269\u4e4b\u59cb\uff0c\u5927\u9053\u81f3\u7b80\u201d\\n\\n\u672c\u6587\u5c1d\u8bd5\u4ece\u7b80\u5355\u7684\u5355\u5143\u6d4b\u8bd5\u601d\u60f3\u7740\u624b\uff0c\u63a2\u8ba8\u5982\u4f55\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u3002\u4ee5\u4e0b\u5c06\u4e3b\u8981\u57fa\u4e8e [TypeScript], [Jest], [React], [Enzyme] \u7ed9\u51fa\u793a\u4f8b\u3002\u5173\u4e8e\u5355\u5143\u6d4b\u8bd5\u7684[\u57fa\u672c\u6982\u5ff5\u548c\u91cd\u8981\u6027]\u4e0d\u5728\u672c\u6587\u8ba8\u8bba\u8303\u56f4\u3002\\n\\n## \u57fa\u672c\u65b9\u6cd5\\n\\n\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u672c\u65b9\u6cd5\u5176\u5b9e\u5f88\u7b80\u5355\uff1a\\n\\n1. \u7ed9\u5b9a\u8f93\u5165\\n2. \u8fd0\u884c\\n3. \u65ad\u8a00\u8f93\u51fa\\n\\n\u800c\u4e00\u4e2a\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u7684\u8981\u6c42\u4e5f\u5f88\u7b80\u5355\uff1a\\n\\n- \u8986\u76d6\u8db3\u591f\u7684\u8f93\u5165\u573a\u666f\\n- \u8fdb\u884c\u5145\u5206\u7684\u8f93\u51fa\u65ad\u8a00\\n\\n\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `add.ts`\\nfunction add(a: number, b: number): number {\\n  return a + b;\\n}\\n```\\n\\n```ts\\n// `add.spec.ts`\\ntest(\\"add(1, 2) should return 3\\", () => {\\n  expect(add(1, 2)).toBe(3);\\n});\\n```\\n\\n\u6211\u4eec\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a\\n\\n1. \u7ed9\u5b9a\u8f93\u5165\uff1a`1`, `2`\\n2. \u8fd0\u884c\uff1a `add(...)`\\n3. \u65ad\u8a00\u8f93\u51fa\uff1a`expect(...).toBe(3)`\\n\\n\u662f\u4e0d\u662f\u5f88\u7b80\u5355\uff1f\u5f53\u7136\uff0c\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e0b\u6211\u4eec\u8981\u6d4b\u8bd5\u7684\u5355\u5143\u8fdc\u6bd4\u4e0a\u8ff0\u4f8b\u5b50\u590d\u6742\u5f97\u591a\u3002\\n\\n- \u8f93\u5165\u66f4\u52a0\u590d\u6742\uff0c\u9664\u4e86\u666e\u901a\u7684\u51fd\u6570\u8f93\u5165\u53c2\u6570\uff0c\u8fd8\u53ef\u80fd\u6709\u5916\u90e8\u7684\u4e8b\u4ef6\uff0c\u56e0\u6b64\u96be\u4ee5\u8986\u76d6\u6240\u6709\u573a\u666f\\n- \u8f93\u51fa\u66f4\u52a0\u590d\u6742\uff0c\u9664\u4e86\u666e\u901a\u7684\u51fd\u6570\u8f93\u51fa\u7ed3\u679c\uff0c\u8fd8\u53ef\u80fd\u6709\u5bf9\u5916\u90e8\u7684\u526f\u4f5c\u7528\uff0c\u56e0\u6b64\u96be\u4ee5\u65ad\u8a00\u8fd0\u884c\u7ed3\u679c\\n\\n> \u8fd9\u91cc\u63d0\u5230\u7684*\u8f93\u5165*\u3001*\u8f93\u51fa*\u4e0d\u518d\u662f\u72ed\u4e49\u4e0a\u7684\u51fd\u6570\u8f93\u5165\u3001\u8f93\u51fa\u3002\u6211\u4eec\u5c06\u6240\u6709\u53ef\u80fd\u5f71\u54cd\u6d4b\u8bd5\u5bf9\u8c61\u884c\u4e3a\u7684\u5916\u90e8\u56e0\u7d20\u90fd\u79f0\u4e4b\u4e3a\u8f93\u5165\uff0c\u5c06\u6240\u6709\u6d4b\u8bd5\u5bf9\u8c61\u8fd0\u884c\u540e\u5bf9\u5916\u90e8\u9020\u6210\u7684\u5f71\u54cd\u90fd\u79f0\u4e4b\u4e3a\u8f93\u51fa\u3002\u8fd9\u6837\u7406\u89e3\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5316\u7e41\u4e3a\u7b80\uff0c\u5c06\u6d4b\u8bd5\u8fc7\u7a0b\u56de\u5f52\u5230\u524d\u9762\u63d0\u5230\u7684\u6700\u57fa\u672c\u7684\u65b9\u6cd5\u4e0a\u3002\\n\\n\u6240\u4ee5\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u9996\u5148\u8981\u505a\u7684\u5c31\u662f\u5398\u6e05\u6d4b\u8bd5\u5bf9\u8c61\u7684\u8f93\u5165\u3001\u8f93\u51fa\uff0c\u638c\u63e1\u8986\u76d6\u4e0d\u540c\u5f62\u5f0f\u7684\u8f93\u5165\u3001\u65ad\u8a00\u4e0d\u540c\u5f62\u5f0f\u7684\u8f93\u51fa\u7684\u65b9\u6cd5\u3002\u6211\u4eec\u5c06\u5206\u5f00\u8ba8\u8bba\u5b83\u4eec\u3002\\n\\n## \u8f93\u5165\\n\\n\u8db3\u591f\u7b80\u5355\u7684\u8f93\u5165\u8ba9\u6211\u4eec\u53ef\u4ee5\u82b1\u66f4\u5c11\u7684\u65f6\u95f4\u3001\u8986\u76d6\u66f4\u591a\u7684\u573a\u666f\u3002\u8f93\u5165\u7684\u6765\u6e90\u5927\u81f4\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a\\n\\n- \u666e\u901a\u53d8\u91cf\u53c2\u6570\\n- \u5916\u90e8\u4f9d\u8d56\u53d1\u9001\u7684\u4e8b\u4ef6\\n- GUI \u64cd\u4f5c\u4e8b\u4ef6\\n\\n\u7f16\u5199\u6d4b\u8bd5\u8986\u76d6\u5b83\u4eec\u7684\u590d\u6742\u5ea6\u4f9d\u6b21\u589e\u5927\u3002\u9664\u4e86\u7b2c\u4e00\u4e2a\uff0c\u5176\u5b83\u90fd\u53ef\u4ee5\u770b\u4f5c*\u5916\u90e8\u4e8b\u4ef6*\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a*\u6765\u81ea\u5916\u754c\u7684\u526f\u4f5c\u7528*\u3002\u5bf9\u4e8e\u666e\u901a\u53d8\u91cf\u53c2\u6570\uff0c\u6211\u4eec\u53ea\u9700\u6784\u9020\u8fd9\u4e9b\u53c2\u6570\u5373\u53ef\u5b8c\u6210*\u7ed9\u5b9a\u8f93\u5165*\u7684\u4efb\u52a1\u3002\u800c\u5bf9\u4e8e\u5916\u90e8\u4e8b\u4ef6\uff0c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u60f3\u529e\u6cd5\u89e6\u53d1\u8fd9\u4e9b\u4e8b\u4ef6\u3002\\n\\n\u6211\u4eec\u4f9d\u7136\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `MyComponent.ts`\\nwindow.addEventListener(\\"resize\\", () => { ... });\\n```\\n\\n\u5982\u4f55\u8986\u76d6\uff1f\u4e3b\u52a8\u53d1\u9001\u8fd9\u4e2a\u4e8b\u4ef6\uff1a\\n\\n```ts\\n// `MyComponent.spec.ts`\\ntest(\\"MyComponent\\", () => {\\n  window.dispatchEvent(new Event(\\"resize\\"));\\n  // ...\\n});\\n```\\n\\n\u518d\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `MyComponent.tsx`\\nconst handleChange = (value: string): void => { ... };\\nreturn <Editor onChange={handleChange} />\\n```\\n\\n\u5982\u4f55\u8986\u76d6\u4f9d\u8d56\u7ec4\u4ef6\u7684\u7279\u5b9a\u4e8b\u4ef6\uff1f\u4e3b\u52a8\u89e6\u53d1\u4f9d\u8d56\u7ec4\u4ef6\u7684\u4e8b\u4ef6\uff1a\\n\\n```ts\\n// `MyComponent.spec.tsx`\\ntest(\\"MyComponent\\", () => {\\n  const wrapper = shallow(<MyComponent />);\\n  wrapper.find(Editor).invoke(\\"onChange\\")(\\"faked value\\");\\n  // ...\\n});\\n```\\n\\n## \u8f93\u51fa\\n\\n\u8db3\u591f\u7b80\u5355\u7684\u8f93\u51fa\u8ba9\u6211\u4eec\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u65ad\u8a00\u8fd0\u884c\u7ed3\u679c\u3002\u8f93\u51fa\u7684\u5f62\u6001\u5927\u81f4\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a\\n\\n- \u666e\u901a\u53d8\u91cf\u8f93\u51fa\\n- GUI \u7684\u53d8\u5316\\n- \u5916\u90e8\u4f9d\u8d56\u7684\u8c03\u7528\\n\\n\u5728\u6d4b\u8bd5\u4e2d\u5bf9\u5b83\u4eec\u8fdb\u884c\u65ad\u8a00\u7684\u590d\u6742\u5ea6\u4f9d\u6b21\u589e\u5927\u3002\u9664\u4e86\u7b2c\u4e00\u4e2a\uff0c\u5176\u5b83\u90fd\u53ef\u4ee5\u770b\u4f5c*\u5bf9\u5916\u754c\u7684\u526f\u4f5c\u7528*\u3002\u5bf9\u4e8e\u666e\u901a\u53d8\u91cf\u8f93\u51fa\uff0c\u6211\u4eec\u53ea\u9700\u7b80\u5355\u5730\u65ad\u8a00\u5b83\u7684\u503c\u5373\u53ef\u3002\u800c\u5bf9\u4e8e\u5bf9\u5916\u754c\u7684\u526f\u4f5c\u7528\uff0c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u60f3\u529e\u6cd5\u65ad\u8a00\u8fd9\u4e9b\u526f\u4f5c\u7528\u7684\u5f71\u54cd\u3002\\n\\n\u6211\u4eec\u7ee7\u7eed\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `handleClick.ts`\\nfunction handleClick(): void {\\n  history.push(\\"/next/url\\");\\n}\\n```\\n\\n\u5982\u4f55\u65ad\u8a00\uff1f\u6211\u4eec\u53ef\u4ee5\u65ad\u8a00\u526f\u4f5c\u7528\u7684\u5f71\u54cd\u7ed3\u679c\uff1a\\n\\n```ts\\n// `handleClick.spec.ts`\\ntest(\\"handleClick\\", () => {\\n  handleClick();\\n  expect(history.location.pathname).toBe(\\"/next/url\\");\\n});\\n```\\n\\n\u6709\u65f6\u526f\u4f5c\u7528\u6240\u5f71\u54cd\u7684\u7ed3\u679c\u96be\u4ee5\u65ad\u8a00\uff0c\u6216\u8005\u8be5\u4f9d\u8d56\u88ab _Mocked_\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u76d1\u89c6\u8be5\u526f\u4f5c\u7528\u7684\u89e6\u53d1\u70b9\u662f\u5426\u88ab\u6b63\u786e\u8c03\u7528\u4e86\uff1a\\n\\n```ts\\n// `handleClick.spec.ts`\\ntest(\\"handleClick\\", () => {\\n  const spyOnHistoryPush = jest.spyOn(history, \\"push\\");\\n  expect(spyOnHistoryPush).toBeCalledWith(\\"/next/url\\");\\n});\\n```\\n\\n\u518d\u770b\u4e00\u4e2a React \u7ec4\u4ef6\u7684\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `MyComponent.tsx`\\nconst handleValidation = (valid: boolean): void => {\\n  this.setState({ valid });\\n};\\nreturn (\\n  <Form.Item className={this.state.valid ? \\"valid\\" : \\"invalid\\"}>\\n    <Input />\\n  </Form.Item>\\n);\\n```\\n\\n\u5982\u4f55\u65ad\u8a00\uff1f\u5224\u65ad\u4f9d\u8d56\u7ec4\u4ef6\u7684\u53d8\u5316\uff1a\\n\\n```ts\\n// `MyComponent.spec.tsx`\\ntest(\\"MyComponent\\", () => {\\n  const wrapper = shallow(<MyComponent />);\\n  // ... after something trigger `handleValidation()`\\n  expect(wrapper.find(Form.Item).prop(\\"className\\")).toBe(\\"invalid\\");\\n});\\n```\\n\\n\u59cb\u7ec8\u8bb0\u5f97\u8981\u65ad\u8a00\u6d4b\u8bd5\u5bf9\u8c61\u8fd0\u884c\u540e\u5bf9\u5916\u754c\u7684\u526f\u4f5c\u7528\u5f71\u54cd\u3002\\n\\n\u53e6\u5916\u65ad\u8a00\u7684\u76ee\u6807\u5e94\u8be5\u662f*\u5bf9\u5916\u7684\u5f71\u54cd*\uff0c\u800c\u4e0d\u662f*\u5185\u90e8\u72b6\u6001*\uff0c\u56e0\u4e3a\u5185\u90e8\u72b6\u6001\u5e76\u4e0d\u662f\u6d4b\u8bd5\u5bf9\u8c61\u7684*\u8f93\u51fa*\u3002\u4e00\u4e2a\u9519\u8bef\u7684\u4f8b\u5b50\uff1a\\n\\n```ts\\n// `MyComponent.bad.spec.tsx`\\nexpect(wrapper.instance().state.valid).toBe(\\"invalid\\");\\n```\\n\\n## \u91cd\u6784\u4e0e\u62c6\u5206\\n\\n\u66f4\u7b80\u5355\u7684\u8f93\u5165\u3001\u8f93\u51fa\u8ba9\u6211\u4eec\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u7f16\u5199\u597d\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u4f46\u5f80\u5f80\u5b9e\u9645\u60c5\u51b5\u662f\u4e1a\u52a1\u9700\u6c42\u4e0d\u65ad\u589e\u957f\uff0c\u7ec4\u4ef6\u5185\u90e8\u903b\u8f91\u4e0d\u65ad\u590d\u6742\u5316\uff0c\u8f93\u5165\u8f93\u51fa\u7684\u5f62\u5f0f\u5f62\u6001\u66f4\u52a0\u591a\u6837\u5316\uff0c\u4e3a\u7ec4\u4ef6\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u96be\u5ea6\u4e5f\u968f\u4e4b\u9661\u589e\u3002\\n\\n**\u9002\u65f6\u5730\u91cd\u6784\u4e0e\u62c6\u5206**\u662f\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u5173\u952e\u3002\u5728\u5982\u4eca\u7684\u524d\u7aef\u7ec4\u4ef6\u5316\u7684\u6a21\u5f0f\u4e0b\u5c24\u4e3a\u91cd\u8981\uff0c\u5408\u7406\u62c6\u5206\u540e\u7684\u7ec4\u4ef6\u53ef\u4ee5\u8ba9\u6bcf\u4e2a\u6d4b\u8bd5\u5355\u5143\u7684\u8f93\u5165\u8f93\u51fa\u90fd\u53d8\u5f97\u66f4\u5c11\u3001\u66f4\u805a\u7126\u3002\u8bf8\u5982 React, [Redux] \u7b49\u4e3b\u6d41\u6846\u67b6\u548c\u5de5\u5177\u63a8\u5d07\u7684[\u5355\u5411\u6570\u636e\u6d41]\u76db\u884c\u7684\u5176\u4e2d\u4e00\u4e2a\u539f\u56e0\u5c31\u662f\u5b83\u4eec\u5de7\u5999\u5730\u8ba9\u5404\u4e2a\u5355\u5143\u7684\u8f93\u5165\u6765\u6e90\u3001\u8f93\u51fa\u5f71\u54cd\u5355\u4e00\u5316\uff0c\u4ece\u800c\u964d\u4f4e\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u96be\u5ea6\uff0c\u540c\u65f6\u63d0\u5347\u7ec4\u4ef6\u96c6\u6210\u65f6\u7684\u4fe1\u5fc3\u3002\\n\\n## \u603b\u7ed3\\n\\n\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u603b\u7ed3\u4e0b\u6765\u5c31\u662f\u4e09\u6761\uff1a\\n\\n- \u8bc6\u522b\u6d4b\u8bd5\u5bf9\u8c61\u7684\u8f93\u5165\u3001\u8f93\u51fa\\n- \u638c\u63e1\u4e0d\u540c\u5f62\u6001\u4e0b\u7684\u8f93\u5165\u8986\u76d6\u3001\u8f93\u51fa\u65ad\u8a00\u7684\u65b9\u6cd5\\n- \u9002\u65f6\u5730\u91cd\u6784\u4e0e\u62c6\u5206\\n\\n\u5e0c\u671b\u4ee5\u4e0a\u5185\u5bb9\u5bf9\u5927\u5bb6\u6709\u6240\u5e2e\u52a9\u3002\\n\\n[typescript]: https://www.typescriptlang.org/\\n[jest]: https://jestjs.io/\\n[react]: https://reactjs.org/\\n[enzyme]: https://airbnb.io/enzyme/\\n[redux]: https://redux.js.org/\\n[\u5355\u5411\u6570\u636e\u6d41]: https://flaviocopes.com/react-unidirectional-data-flow/\\n[\u57fa\u672c\u6982\u5ff5\u548c\u91cd\u8981\u6027]: https://zh.wikipedia.org/wiki/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95"},{"id":"welcome","metadata":{"permalink":"/docusaurus-search-local/blog/welcome","editUrl":"https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/blog/2019-05-30-welcome.md","source":"@site/blog/2019-05-30-welcome.md","title":"Welcome","description":"Blog features are powered by the blog plugin. Simply add files to the blog directory. It supports tags as well!","date":"2019-05-30T00:00:00.000Z","formattedDate":"May 30, 2019","tags":[{"label":"facebook","permalink":"/docusaurus-search-local/blog/tags/facebook"},{"label":"hello","permalink":"/docusaurus-search-local/blog/tags/hello"},{"label":"docusaurus","permalink":"/docusaurus-search-local/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4"}],"frontMatter":{"slug":"welcome","title":"Welcome","author":"Yangshun Tay","author_title":"Front End Engineer @ Facebook","author_url":"https://github.com/yangshun","author_image_url":"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4","tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"\u7f16\u5199\u826f\u597d\u7684\u5355\u5143\u6d4b\u8bd5","permalink":"/docusaurus-search-local/blog/writing-good-unit-tests"},"nextItem":{"title":"Hello","permalink":"/docusaurus-search-local/blog/hello-world"}},"content":"Blog features are powered by the blog plugin. Simply add files to the `blog` directory. It supports tags as well!\\n\\nDelete the whole directory if you don\'t want the blog features. As simple as that!"},{"id":"hello-world","metadata":{"permalink":"/docusaurus-search-local/blog/hello-world","editUrl":"https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/blog/2019-05-29-hello-world.md","source":"@site/blog/2019-05-29-hello-world.md","title":"Hello","description":"Welcome to this blog. This blog is created with Docusaurus 2 alpha.","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/docusaurus-search-local/blog/tags/hello"},{"label":"docusaurus","permalink":"/docusaurus-search-local/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://avatars1.githubusercontent.com/u/17883920?s=460&v=4"}],"frontMatter":{"slug":"hello-world","title":"Hello","author":"Endilie Yacop Sucipto","author_title":"Maintainer of Docusaurus","author_url":"https://github.com/endiliey","author_image_url":"https://avatars1.githubusercontent.com/u/17883920?s=460&v=4","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/docusaurus-search-local/blog/welcome"},"nextItem":{"title":"Hola","permalink":"/docusaurus-search-local/blog/hola"}},"content":"Welcome to this blog. This blog is created with [**Docusaurus 2 alpha**](https://v2.docusaurus.io/).\\n\\n\x3c!--truncate--\x3e\\n\\nThis is a test post.\\n\\nA whole bunch of other information."},{"id":"hola","metadata":{"permalink":"/docusaurus-search-local/blog/hola","editUrl":"https://github.com/easyops-cn/docusaurus-search-local/edit/master/website/blog/2019-05-28-hola.md","source":"@site/blog/2019-05-28-hola.md","title":"Hola","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/docusaurus-search-local/blog/tags/hola"},{"label":"docusaurus","permalink":"/docusaurus-search-local/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","imageURL":"https://avatars1.githubusercontent.com/u/2055384?v=4"}],"frontMatter":{"slug":"hola","title":"Hola","author":"Gao Wei","author_title":"Docusaurus Core Team","author_url":"https://github.com/wgao19","author_image_url":"https://avatars1.githubusercontent.com/u/2055384?v=4","tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Hello","permalink":"/docusaurus-search-local/blog/hello-world"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);