import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from './firebase/firebase';

interface LoginData {
    email: string;
    password: string;
}

interface SignUpData {
    name: string;
    email: string;
    password: string;
    passwordR: string;
}

interface ApiResponse {
    status: number;
    message: string;
}


const Login = async (data: LoginData): Promise<ApiResponse> => {
    const { email, password } = data;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { status: 201, message: "User logged in" };
    } catch (error: any) {
        let errorMessage = "An error occurred while logging in";
        if (error.code === "auth/wrong-password") {
            errorMessage = "incorrect password";
        } else if (error.code === "auth/user-not-found") {
            errorMessage = "User not found";
        }
        return { status: 400, message: errorMessage };
    }
}

const signUp = async (data: SignUpData): Promise<ApiResponse> => {
    const { name, email, password, passwordR } = data;
    if (passwordR === password) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log("user", user)
            await updateNameProfile(name);
            return { status: 201, message: 'Registered successfully!' };
        } catch (error: any) {
            let errorMessage = "Error try later";
            if (error.code === "auth/email-already-in-use") {
                errorMessage = "There is already a user with this email";
            } else if (error.code === "auth/weak-password") {
                errorMessage = "Password should be at least 6 characters";
            }
            return { status: 400, message: errorMessage };
        }
    } else {
        return { status: 400, message: 'Passwords do not match' };
    }
}

const updateNameProfile = async (name: string) => {
    if (auth.currentUser) {
        return await updateProfile(auth.currentUser, { displayName: name });
    }
}

export { signUp, Login };
