package com.ny.rfidlabel;

public class HexUtil {

    public static String Bytes2HexString(byte[] param, int len) {
    	if(null == param || param.length <=0)
    		return "";
    	StringBuilder buf = new StringBuilder();
    	for(int i=0;i<len;i++) {
    		String str = Integer.toHexString(param[i] & 0xFF);
    		if(str.length() == 1)
    			buf.append("0");
    		buf.append(str);
    	}
    	return buf.toString();
    	/*
        Object localObject1 = "";
        int i = 0;
        while (true) {
            if (i >= len)
                return (String) localObject1;
            String str = Integer.toHexString(param[i] & 0xFF);
            Object localObject2 = str;
            if (str.length() == 1) {
                localObject2 = new StringBuilder("0");
                ((StringBuilder) localObject2).append(str);
                localObject2 = ((StringBuilder) localObject2).toString();
            }
            localObject1 = new StringBuilder(String.valueOf(localObject1));
            ((StringBuilder) localObject1).append(((String) localObject2).toUpperCase());
            localObject1 = ((StringBuilder) localObject1).toString();
            i += 1;
        }
        */
    }

    public static String bytesToHexString(byte[] paramArrayOfByte) {
        StringBuilder localStringBuilder = new StringBuilder("");
        if ((paramArrayOfByte != null) && (paramArrayOfByte.length > 0)) {
            int i = 0;
            while (true) {
                if (i >= paramArrayOfByte.length)
                    return localStringBuilder.toString();
                String str = Integer.toHexString(paramArrayOfByte[i] & 0xFF);
                if (str.length() < 2)
                    localStringBuilder.append(0);
                localStringBuilder.append(str);
                i += 1;
            }
        }
        return null;
    }

    private static byte charToByte(char paramChar) {
        return (byte) "0123456789ABCDEF".indexOf(paramChar);
    }

    public static byte[] hexStringToBytes(String paramString) {
        if ((paramString != null) && (!paramString.equals(""))) {
            paramString = paramString.toUpperCase();
            int j = paramString.length() / 2;
            char[] paramStringB = paramString.toCharArray();
            byte[] arrayOfByte = new byte[j];
            int i = 0;
            while (true) {
                if (i >= j)
                    return arrayOfByte;
                int k = i * 2;
                arrayOfByte[i] = (byte) (charToByte(paramStringB[k]) << 4 | charToByte(paramStringB[(k + 1)]));
                i += 1;
            }
        }
        return null;
    }
}
