import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

/**
 * Debounced callback hook
 * Delays function execution until after a specified wait time has elapsed
 * since the last time it was invoked
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T {
    const timeoutRef = useRef<NodeJS.Timeout>();
    const callbackRef = useRef(callback);

    // Update callback ref when callback changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    return useCallback(
        ((...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                callbackRef.current(...args);
            }, delay);
        }) as T,
        [delay]
    );
}

/**
 * Hook for syncing component state with URL search parameters
 * Provides utilities for reading from and writing to URL params
 * 
 * @example
 * const { updateURL, getParam } = useURLSync();
 * const [search, setSearch] = useState(getParam('search', ''));
 * 
 * useEffect(() => {
 *   updateURL({ search, type: selectedType });
 * }, [search, selectedType]);
 */
export function useURLSync() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    /**
     * Get a single parameter value from URL
     * @param key Parameter name
     * @param defaultValue Fallback value if parameter doesn't exist
     */
    const getParam = useCallback(
        (key: string, defaultValue: string = ''): string => {
            return searchParams.get(key) || defaultValue;
        },
        [searchParams]
    );

    /**
     * Get all current URL parameters as an object
     */
    const getAllParams = useCallback((): Record<string, string> => {
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }, [searchParams]);

    /**
     * Update URL with new parameters (debounced)
     * Automatically filters out empty, null, undefined, and 'ALL' values
     * Uses shallow routing to avoid page reload
     */
    const updateURL = useDebouncedCallback((params: Record<string, any>) => {
        const newParams = new URLSearchParams(searchParams);

        Object.entries(params).forEach(([key, value]) => {
            const stringValue = String(value);

            // Only add non-empty, meaningful values
            if (
                value &&
                value !== null &&
                value !== undefined &&
                stringValue !== '' &&
                stringValue !== 'ALL' &&
                stringValue !== 'null' &&
                stringValue !== 'undefined'
            ) {
                newParams.set(key, stringValue);
            } else {
                // Remove parameter if value is empty/default
                newParams.delete(key);
            }
        });

        // Build new URL
        const queryString = newParams.toString();
        const newURL = queryString ? `${pathname}?${queryString}` : pathname;

        // Push to router with shallow routing (no page reload)
        router.push(newURL, { scroll: false });
    }, 300); // 300ms debounce delay

    /**
     * Clear all URL parameters
     */
    const clearParams = useCallback(() => {
        router.push(pathname, { scroll: false });
    }, [router, pathname]);

    return {
        /** Update URL parameters (debounced) */
        updateURL,
        /** Get a single parameter value */
        getParam,
        /** Get all parameters as object */
        getAllParams,
        /** Clear all URL parameters */
        clearParams,
        /** Raw searchParams object */
        searchParams,
    };
}

/**
 * Parse date from URL parameter
 * @param dateString ISO date string from URL
 * @returns Date object or undefined
 */
export function parseDateParam(dateString: string | null): Date | undefined {
    if (!dateString) return undefined;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? undefined : date;
}

/**
 * Serialize date for URL parameter
 * @param date Date object
 * @returns ISO date string
 */
export function serializeDateParam(date: Date | null | undefined): string {
    if (!date) return '';
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}
