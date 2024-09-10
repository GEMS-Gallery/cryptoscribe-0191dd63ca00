export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Post = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'date' : IDL.Text,
    'timestamp' : Time,
  });
  const Result = IDL.Variant({ 'ok' : Post, 'err' : IDL.Text });
  return IDL.Service({
    'createPost' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [Result], []),
    'getPosts' : IDL.Func([], [IDL.Vec(Post)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
