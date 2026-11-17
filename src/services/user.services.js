const users = [
    {
        userID: 1,
        name: "andrew",
        email: "realemail@aol.com",
        phoneNumber: "1-800-000-0000",
        role: "admin"
    },
    {
        userID: 2,
        name: "isaac",
        email: "fakeemail@yahoo.com",
        phoneNumber: "956-123-4567",
        role: "user"
    },
    {
        userID: 3,
        name: "matt",
        email: "matt@utrgv.edu",
        phoneNumber: "444-444-4444",
        role: "user"
    }
];

const getAllUsers = () => {
    return users;
};

const authenticateUser = (name, email, phoneNumber) => {
    if ([name, email, phoneNumber].some((value) => typeof value !== 'string' || !value.trim())) {
        return undefined;
    }

    const normalizedName = name.trim().toLowerCase();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPhone = phoneNumber.replace(/\D/g, '');

    return users.find((user) =>
        user.name.toLowerCase() === normalizedName
        && user.email.toLowerCase() === normalizedEmail
        && user.phoneNumber.replace(/\D/g, '') === normalizedPhone
    );
};

const promoteUser = (userID) => {
    const user = users.find((existingUser) => existingUser.userID === Number(userID));
    if (!user) {
        return false;
    }

    user.role = "admin";
    return true;
};

export default {
    getAllUsers,
    authenticateUser,
    promoteUser
};