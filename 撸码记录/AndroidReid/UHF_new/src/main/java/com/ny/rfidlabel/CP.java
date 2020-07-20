package com.ny.rfidlabel;

import java.io.UnsupportedEncodingException;

public class CP {

	private static final String CBT_DATA = "JosNOI7s93lHSu98";

	/**
	 * 二进制字符数组转为十六进制字符串
	 * @param 二进制字符数组 
	 * @return 十六进制字符串
	 */
    public static String bytes2HexString(byte[] param) {
    	if(null == param || param.length <=0)
    		return "";
    	StringBuilder buf = new StringBuilder();
    	for(int i=0;i<param.length;i++) {
    		String str = Integer.toHexString(param[i] & 0xFF);
    		if(str.length() == 1)
    			buf.append("0");
    		buf.append(str);
    	}
    	return buf.toString();
    }

    public static byte[] cbt_crypt(String paramString, int paramInt)
            throws UnsupportedEncodingException {
        int j = 0;
        byte[] arrayOfByte = CBT_DATA.getBytes();
        byte[] paramStringB = paramString.getBytes();
        int i = 0;
        while (true) {
            if (i >= paramInt)
                return paramStringB;
            paramStringB[i] = (byte) (paramString.charAt(i) ^ arrayOfByte[j]);
            j = (j + 1) % 8;
            i += 1;
        }
    }

    public static byte[] cbt_crypt(String paramString, int paramInt1, int paramInt2)
            throws UnsupportedEncodingException {
        int i = paramInt2 % 8;
        byte[] arrayOfByte = CBT_DATA.getBytes();
        byte[] paramStringB = paramString.getBytes();
        paramInt2 = 0;
        while (true) {
            if (paramInt2 >= paramInt1)
                return paramStringB;
            paramStringB[paramInt2] = (byte) (paramString.charAt(paramInt2) ^ arrayOfByte[i]);
            i = (i + 1) % 8;
            paramInt2 += 1;
        }
    }

    public static byte[] cbt_crypt(byte[] param) throws UnsupportedEncodingException {
        int j = 0;
        byte[] arrayOfByte = CBT_DATA.getBytes();
        int i = 0;
        while (true) {
            if (i >= param.length)
                return param;
            param[i] = (byte) (param[i] ^ arrayOfByte[j]);
            j = (j + 1) % 8;
            i += 1;
        }
    }

    public static byte charToByte(char c) {
        return (byte) "0123456789ABCDEF".indexOf(c);
    }

    public static byte[] hexString2Bytes(String param) {
        if (param != null) {
            if (param.equals(""))
                return null;
            if (param.length() % 2 != 0)
                return null;
            int j = param.length() / 2;
            byte[] paramStringB = new byte[j];
            char[] localObject = param.toUpperCase().toCharArray();
            int i = 0;
            while (true) {
                if (i >= j)
                    return paramStringB;
                int k = i * 2;
                paramStringB[i] = (byte) (charToByte(localObject[k]) << 4 | charToByte(localObject[(k + 1)]));
                i += 1;
            }
        }
        return null;
    }

    public static byte[] uncbt_crypt(byte[] param, int start, int end) throws UnsupportedEncodingException {
        int i = end % 8;
        byte[] arr = CBT_DATA.getBytes("GBK");
        end = 0;
        while (true) {
            if (end >= start)
                return param;
            param[end] = (byte) (param[end] ^ arr[i]);
            i = (i + 1) % 8;
            end += 1;
        }
    }
}
