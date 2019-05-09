import { getAvatar } from 'services';

export const addNewMemberHandler = ({ newMember, members, setMemberList }) => {
  const __newMember = newMember;
  const names = __newMember.value.split(' ');

  if (!names || names.length < 2 || members.length === 28) return members;

  __newMember.value = '';
  return setMemberList([
    ...members,
    {
      id: Date.now(),
      first_name: names[0],
      last_name: names[1],
      avatar: getAvatar()
    }
  ]);
};

export const removeMemberHandler = ({ id, members, setMemberList }) => {
  return setMemberList(members.filter(member => member.id !== id));
};
