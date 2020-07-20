package com.bean;

/**
 * Created by Administrator on 2017/9/29.
 */

public class Utils {
    
    
    /**
     * 16进制转
     *
     * @param buf
     * @param len
     * @param out
     */
    public static void Hex2Str(byte[] buf, int len, char[] out) {
        char[] hexc = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
        
        for (int i = 0; i < len; ++i) {
            out[i * 2] = hexc[(buf[i] & 255) / 16];
            out[i * 2 + 1] = hexc[(buf[i] & 255) % 16];
        }
    }
    
    public static String bytes_Hexstr(byte[] bArray) {
        StringBuffer sb = new StringBuffer(bArray.length);
        
        for (int i = 0; i < bArray.length; ++i) {
            String sTemp = Integer.toHexString(255 & bArray[i]);
            if (sTemp.length() < 2) {
                sb.append(0);
            }
            
            sb.append(sTemp.toUpperCase());
        }
        
        return sb.toString();
    }
    
    public static void Str2Hex(String buf, int len, byte[] hexbuf) {
        String chex = "0123456789ABCDEF";
        if (len % 2 == 0) {
            for (int i = 0; i < len; i += 2) {
                byte hnx = (byte) chex.indexOf(buf.toUpperCase().substring(i, i + 1));
                byte lnx = (byte) chex.indexOf(buf.toUpperCase().substring(i + 1, i + 2));
                hexbuf[i / 2] = (byte) (hnx << 4 & 255 | lnx & 255);
            }
            
        }
    }
    
}
