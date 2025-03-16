 export const createRoleSpecificData = async (user, extraData) => {
    const roleModels = {
        teacher: Teacher,
        accountant: Accountant
    };

    const Model = roleModels[user.role];

    if (Model) {
        await Model.create({ user_id: user.id, ...extraData });
    }
};
