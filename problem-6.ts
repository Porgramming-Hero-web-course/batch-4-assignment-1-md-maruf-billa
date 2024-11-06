{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }


    const updateProfile = (profileData: Profile, updateData: Partial<Profile>): Profile => {

        return { ...profileData, ...updateData };
    }

}